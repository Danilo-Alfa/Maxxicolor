/**
 * Dados centrais do negocio.
 * Todos os campos marcados com TODO devem ser confirmados/preenchidos
 * antes da publicacao — basta editar este arquivo.
 */
export const site = {
  name: "Maxxi Color",
  legalName: "Maxxi Color Tintas",
  description:
    "Loja de tintas e materiais para pintura e obra: tintas imobiliárias, automotivas e industriais, fitas, solventes, EPIs, elétrica e acessórios. Orçamento rápido pelo WhatsApp.",

  // TODO: confirmar o dominio definitivo antes de publicar
  url: "https://www.maxxicolor.com.br",

  phoneDisplay: "(11) 98411-0045",
  phoneE164: "+5511984110045",

  whatsapp: {
    number: "5511984110045",
    defaultMessage: "Olá! Vim pelo site e gostaria de um orçamento.",
  },

  // TODO: confirmar e-mail de contato
  email: "contato@maxxicolor.com.br",

  // TODO: preencher endereco real da loja
  address: {
    street: "Rua Exemplo, 123",
    district: "Bairro",
    city: "São Paulo",
    state: "SP",
    zip: "00000-000",
  },

  // TODO: confirmar horario de funcionamento
  hours: "Seg. a sex. das 8h às 18h · Sáb. das 8h às 13h",

  social: {
    // TODO: confirmar perfis reais (remover os que nao existirem)
    instagram: "https://instagram.com/maxxicolortintas",
    facebook: "https://facebook.com/maxxicolortintas",
  },
} as const;
