/**
 * Dados centrais do negocio.
 * Todos os campos marcados com TODO devem ser confirmados/preenchidos
 * antes da publicacao — basta editar este arquivo.
 */
export const site = {
  name: "Maxxi Color",
  legalName: "Maxxi Color Tintas",
  description:
    "Loja de tintas e materiais para pintura e obra: tintas imobiliárias e industriais, fitas, solventes, EPIs, elétrica e acessórios. Orçamento rápido pelo WhatsApp.",

  // TODO: confirmar o dominio definitivo antes de publicar
  url: "https://www.maxxicolor.com.br",

  phoneDisplay: "(11) 98411-0045",
  phoneE164: "+5511984110045",

  whatsapp: {
    number: "5511984110045",
    defaultMessage: "Olá! Vim pelo site e gostaria de um orçamento.",
  },

  address: {
    street: "Rua Ministro Heitor Bastos Tigre, 44",
    district: "Jardim Monte Kemel",
    city: "São Paulo",
    state: "SP",
    zip: "05634-060",
  },

  // TODO: confirmar horario de funcionamento
  hours: "Seg. a sex. das 8h às 18h · Sáb. das 8h às 13h",

  social: {
    instagram: "https://www.instagram.com/maxxicolor",
    facebook: "https://www.facebook.com/maxxicolorpisos",
  },
} as const;
