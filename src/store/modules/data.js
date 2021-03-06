export const state = () => ({
    data: [
        {
            "B": "Салат с черносливом и ветчиной",
            "C": 158,
            "P": 1,
            "T": 1
        },
        {
            "B": "Болгарский перец и цуккини на гриле",
            "C": 197,
            "P": 99,
            "T": 2
        },
        {
            "B": "Беговая дорожка",
            "C": 18,
            "P": 31,
            "T": 3
        },
        {
            "B": "Пружина амортизатора",
            "C": 2.14,
            "P": 15,
            "T": 8
        },
        {
            "B": "Набор для рисования Пастель",
            "C": 1.52,
            "P": 76,
            "T": 86
        },
        {
            "B": "Ручка-стилус шариковая",
            "C": 5.5,
            "P": 100,
            "T": 126
        },
        {
            "B": "Чехол для очков",
            "C": 2.71,
            "P": 51,
            "T": 184
        },
        {
            "B": "Сумка для выставок",
            "C": 3.95,
            "P": 2,
            "T": 185
        },
        {
            "B": "Салат из морепродуктов, с огурцами, рукколой и оливками",
            "C": 1.22,
            "P": 51,
            "T": 194
        },
        {
            "B": "Тёртый пирог",
            "C": 1.18,
            "P": 55,
            "T": 12
        },
        {
            "B": "Суп с пекинской капустой",
            "C": 1.55,
            "P": 64,
            "T": 63
        },
        {
            "B": "JavaScript. Подробное руководство. Дэвид Флэнаган.",
            "C": 1.55,
            "P": 77,
            "T": 64
        },
        {
            "B": "Стул деревянный.",
            "C": 5.57,
            "P": 92,
            "T": 65
        },
        {
            "B": "Клавиатура Logitech.",
            "C": 15.42,
            "P": 11,
            "T": 66
        },
        {
            "B": "Салатница керамическая.",
            "C": 2.07,
            "P": 24,
            "T": 67
        },
        {
            "B": "Гантели.",
            "C": 2.94,
            "P": 17,
            "T": 68
        },
        {
            "B": "Ручка шариковая.",
            "C": 1.14,
            "P": 74,
            "T": 69
        }
    ]
});

export const getters = {
    DATA(state) {
        return state.data;
    },

};

export default {
    namespaced: true,
    state,
    getters,
}

