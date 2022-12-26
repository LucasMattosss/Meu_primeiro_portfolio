import {SiOpenaigym} from 'react-icons/si'



export const links = [
   
   
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Musculação",
        info: "O treinamento de força, conhecido popularmente como musculação.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Pilates",
        info: "visa trabalhar a conexão entre mente e corpo, como uma unidade.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Alongamento",
        info: "é um tipo de exercício físico orientado para a manutenção ou melhora da flexibilidade.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: " spinning",
        info: "é uma forma de exercício com aulas focadas em resistência, força, intervalos, alta intensidade.",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "PACOTE GOLD",
        desc: " Direito a todas as vantagens disponíveis."
        
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "PACOTE PRATA",
        desc: "Direito a quase as vantagens disponíveis, exceto pilates"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "PACOTE BRONZE",
        desc: " Direito a Musculação e estacionamento."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "PACOTE MADEIRA",
        desc: " Direito a Musculação ."
    }
]









export const faqs = [
    {
        id: 1,
        question: "Com que frequência devo me exercitar?",
        answer: "A adipisição será realizada. Não é a dor em si, mas o fato de que todos vão sofrer com ela, fugindo dos tempos que não sabem tirar alguma vantagem na culpa do ódio, para que sejam repelidos e afins para suportar!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "A adipisição será realizada. Não é a dor em si, mas o fato de que todos vão sofrer com ela, fugindo dos tempos que não sabem tirar alguma vantagem na culpa do ódio, para que sejam repelidos e afins para suportar!"
    },
    {
        id: 3,
        question: "Qual deve ser a duração dos meus treinos?",
        answer: "A adipisição será realizada. Não é a dor em si, mas o fato de que todos vão sofrer com ela, fugindo dos tempos que não sabem tirar alguma vantagem na culpa do ódio, para que sejam repelidos e afins para suportar!"
    },
    {
        id: 4,
        question: "Preciso me aquecer antes dos treinos?",
        answer: "A adipisição será realizada. Não é a dor em si, mas o fato de que todos vão sofrer com ela, fugindo dos tempos que não sabem tirar alguma vantagem na culpa do ódio, para que sejam repelidos e afins para suportar!"
    },
    {
        id: 5,
        question: "Devo fazer treinamento de força, cardio ou ambos?",
        answer: "A adipisição será realizada. Não é a dor em si, mas o fato de que todos vão sofrer com ela, fugindo dos tempos que não sabem tirar alguma vantagem na culpa do ódio, para que sejam repelidos e afins para suportar!"
    },
    {
        id: 6,
        question: "Devo levantar pesos para treinamento de força?",
        answer: "A adipisição será realizada. Não é a dor em si, mas o fato de que todos vão sofrer com ela, fugindo dos tempos que não sabem tirar alguma vantagem na culpa do ódio, para que sejam repelidos e afins para suportar!"}
]








export const testimonials = [
    {
        id: 1,
        name: "CAMILA Ayi",
        quote: "Não deixe que a preguiça seja mais forte do que a sua vontade de mudar.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "JOAO VITOR",
        quote: "O único treino que dá certo é aquele com muito esforço, determinação e paciência.",
        job: "Engenheiro de software",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "JOANA Quist",
        quote: "O melhor treino é aquele que é constante, sem mimimi e sem dias de preguiça.",
        job: "Estudante de Letras",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "LAIS Lavoe",
        quote: "Tem sentimento melhor do que sentir a evolução no seu corpo depois de tanto esforço na musculação?",
        job: "Estudante",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "LIZ Yaa Dankwa",
        quote: "Treinar me ensina a viver. Na musculação, aprendi que sou muito mais forte do que imaginava.",
        job: "Farmacêutica",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]