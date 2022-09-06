export const state = () => ({
  stuff: [
    {
      id: 1,
      name: 'Химчистка',
      categories: [
        {
          id: 1,
          name: 'Аксессуары',
          items: [],
        },
        {
          id: 2,
          name: 'Верхняя одежда',
          items: [
            {
              id: 'ad67d89d14ed4acf9fb0c02e9f350de1',
              name: 'Пальто, полупальто с подстежкой из натурального меха',
              price: 1400,
              count: 0,
            },
            {
              id: '23c3a8d5489e45b184bff41dcaa6d854',
              name: 'Ветровка',
              price: 520,
              count: 0,
            },
            {
              id: 'd57c528b36ac4dcabe714cf17cab9037',
              name: 'Ветровка (натуральный шелк)',
              price: 3000,
              count: 0,
            },
            {
              id: 'b80a2f816afb486f8e3cecb12640e9ed',
              name: 'Пальто, полупальто с подстежкой из натурального меха',
              price: 11000,
              count: 0,
            },
          ],
        },
        {
          id: 3,
          name: 'Деловой костюм',
          items: [],
        },
        {
          id: 4,
          name: 'Джинса',
          items: [],
        },
        {
          id: 5,
          name: 'Куртка и пуховик',
          items: [],
        },
        {
          id: 6,
          name: 'Пальто и плащ',
          items: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Аквачистка',
      categories: [
        {
          id: 1,
          name: 'Деловой костюм',
          items: [
            {
              id: '074346076ccc4b9ebee091aad5a6e78f',
              name: 'Пиджак',
              price: 1400,
              count: 0,
            },
            {
              id: '6322154c2daf48a287161ca743a04372',
              name: 'Пиджак натуральный шелк',
              price: 520,
              count: 0,
            },
            {
              id: '36a8ba96029b4491ac45f8b768d26bff',
              name: 'Пиджак с коротким рукавом без подклада',
              price: 3000,
              count: 0,
            },
            {
              id: '58a666696f7f4044b5cf82c091d0e9f9',
              name: 'Пиджак натуральный шёлк с коротким рукавом',
              price: 11000,
              count: 0,
            },
          ],
        },
        {
          id: 2,
          name: 'Верхняя одежда',
          items: [],
        },
        {
          id: 3,
          name: 'Джинса',
          items: [],
        },
        {
          id: 4,
          name: 'Куртка и пуховик',
          items: [],
        },
        {
          id: 5,
          name: 'Пальто и плащ',
          items: [],
        },
        {
          id: 6,
          name: 'Аксессуары',
          items: [],
        },
      ],
    },
    {
      id: 3,
      name: 'Ремонт одежды',
      categories: [],
    },
    {
      id: 4,
      name: 'Химчистка',
      categories: [],
    },
    {
      id: 5,
      name: 'Аквачистка',
      categories: [],
    },
    {
      id: 6,
      name: 'Ремонт одежды',
      categories: [],
    },
  ],
  selectedCat: {
    id: 0,
  },
  shortCart: true,
})

export const getters = {
  getStuff(state) {
    return state.stuff
  },
  getSelectedCat(state) {
    return state.selectedCat
  },
  getShortCart(state) {
    return state.shortCart
  },
}

export const mutations = {
  updateSelectedCat(state, obj) {
    Object.assign(state.selectedCat, obj)
  },
  change(state, payload) {
    state.stuff.forEach((val, idx1) => {
      val.categories.forEach((items, idx2) => {
        items.items.forEach((item, idx3) => {
          if (item.id == payload.id) {
            if (payload.value == 0) {
              state.stuff[idx1].categories[idx2].items[idx3].count = 0
            }
            state.stuff[idx1].categories[idx2].items[idx3].count +=
              payload.value
          }
        })
      })
    })
  },
  updateShortCart(state, value) {
    state.shortCart = value
  },
}
