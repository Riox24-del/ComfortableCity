const initialConversations = [
  {
    id: 1,
    contact: "Carlos Martínez",
    avatar: "CM",
    lastMessage: "Hola, estoy interesado en la propiedad de Av. Costera...",
    time: "10:30 AM",
    unread: true,
    messages: [
      {
        id: 1,
        text: "Buen día, vi la propiedad en Av. Costera",
        time: "10:15 AM",
        sent: false
      },
      {
        id: 2,
        text: "Hola Carlos, ¿en qué puedo ayudarte?",
        time: "10:20 AM",
        sent: true
      },
      {
        id: 3,
        text: "Estoy interesado en la propiedad de Av. Costera",
        time: "10:30 AM",
        sent: false
      }
    ]
  },
  {
    id: 2,
    contact: "Inmobiliaria Premium",
    avatar: "IP",
    lastMessage: "Su cita para mañana ha sido confirmada",
    time: "Ayer",
    unread: false,
    messages: [
      {
        id: 1,
        text: "Su cita está programada para mañana a las 3pm",
        time: "Ayer, 2:30 PM",
        sent: true
      },
      {
        id: 2,
        text: "Perfecto, gracias por la confirmación",
        time: "Ayer, 2:45 PM",
        sent: false
      },
      {
        id: 3,
        text: "Su cita para mañana ha sido confirmada",
        time: "Ayer, 5:00 PM",
        sent: true
      }
    ]
  }
];

export default initialConversations;

// DONE