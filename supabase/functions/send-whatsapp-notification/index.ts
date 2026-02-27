import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data = await req.json();
    
    const message = `*📋 Nova Solicitação de Análise*\n\n` +
      `*Nome:* ${data.nome}\n` +
      `*WhatsApp:* ${data.whatsapp}\n` +
      `*E-mail:* ${data.email}\n` +
      `*Cidade/Estado:* ${data.cidadeEstado}\n` +
      `*Área do Direito:* ${data.areaDireito}\n` +
      `*Processo em andamento:* ${data.processoAndamento}\n` +
      `*Urgência:* ${data.urgencia}\n\n` +
      `*Descrição:*\n${data.descricao}`;

    // Generate WhatsApp API URL for webhook-style notification
    const whatsappUrl = `https://api.callmebot.com/whatsapp.php?phone=5549999754550&text=${encodeURIComponent(message)}&apikey=`;

    // Store in database
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    const dbResponse = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        nome: data.nome,
        whatsapp: data.whatsapp,
        email: data.email,
        cidade_estado: data.cidadeEstado,
        area_direito: data.areaDireito,
        processo_andamento: data.processoAndamento,
        descricao: data.descricao,
        urgencia: data.urgencia,
      }),
    });

    if (!dbResponse.ok) {
      const errText = await dbResponse.text();
      throw new Error(`Database insert failed [${dbResponse.status}]: ${errText}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Formulário enviado com sucesso!' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
