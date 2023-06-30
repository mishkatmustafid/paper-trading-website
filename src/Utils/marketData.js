  
    const stockData = {
      google: {
        graphData: [
          { stock: "google", month: "Jan", price: 4 },
          { stock: "google", month: "Feb", price: 8 },
          { stock: "google", month: "Mar", price: 11.56 },
          { stock: "google", month: "Apr", price: 1.58 },
          { stock: "google", month: "May", price: 5.75 },
          { stock: "google", month: "Jun", price: 7.85 },
        ],
        buyMarketData: [
          { quantity: 100, price: 2.5, ordervalue: 250 },
          { quantity: 750, price: 1.8, ordervalue: 1350 },
          { quantity: 60, price: 0.8, ordervalue: 48 },
          { quantity: 569, price: 0.8, ordervalue: 455.2 },
        ],
        sellMarketData: [
          { quantity: 100, price: 2.5, ordervalue: 250 },
          { quantity: 750, price: 1.8, ordervalue: 1350 },
          { quantity: 60, price: 0.8, ordervalue: 48 },
          { quantity: 569, price: 0.8, ordervalue: 455.2 },
          { quantity: 60, price: 0.8, ordervalue: 48 },
          { quantity: 569, price: 0.8, ordervalue: 455.2 },
          { quantity: 60, price: 0.8, ordervalue: 48 },
          { quantity: 569, price: 0.8, ordervalue: 455.2 },
        ],
      },
      facebook: {
        graphData: [
          { stock: "facebook", month: "Jan", price: 4 },
          { stock: "facebook", month: "Feb", price: 8 },
          { stock: "facebook", month: "Mar", price: 11.56 },
          { stock: "facebook", month: "Apr", price: 1.58 },
          { stock: "facebook", month: "May", price: 5.75 },
          { stock: "facebook", month: "Jun", price: 7.85 },
        ],
        buyMarketData: [
          { quantity: 100, price: 2.5, ordervalue: 250 },
          { quantity: 750, price: 1.8, ordervalue: 1350 },
          { quantity: 60, price: 0.8, ordervalue: 48 },
          { quantity: 569, price: 0.8, ordervalue: 455.2 },
        ],
        sellMarketData: [
          { quantity: 100, price: 2.5, ordervalue: 250 },
          { quantity: 750, price: 1.8, ordervalue: 1350 },
          { quantity: 60, price: 0.8, ordervalue: 48 },
          { quantity: 569, price: 0.8, ordervalue: 455.2 },
          { quantity: 60, price: 0.8, ordervalue: 48 },
          { quantity: 569, price: 0.8, ordervalue: 455.2 },
          { quantity: 60, price: 0.8, ordervalue: 48 },
          { quantity: 569, price: 0.8, ordervalue: 455.2 },
        ],
      },
      amazon: {
        graphData: [
          { stock: "amazon", month: "Jan", price: 6 },
          { stock: "amazon", month: "Feb", price: 12 },
          { stock: "amazon", month: "Mar", price: 14.56 },
          { stock: "amazon", month: "Apr", price: 2.58 },
          { stock: "amazon", month: "May", price: 8.75 },
          { stock: "amazon", month: "Jun", price: 10.85 },
        ],
        buyMarketData: [
          { quantity: 50, price: 4.5, ordervalue: 225 },
          { quantity: 300, price: 3.2, ordervalue: 960 },
          { quantity: 40, price: 1.5, ordervalue: 60 },
          { quantity: 500, price: 2.5, ordervalue: 1250 },
        ],
        sellMarketData: [
          { quantity: 30, price: 5.5, ordervalue: 165 },
          { quantity: 200, price: 4.2, ordervalue: 840 },
          { quantity: 20, price: 2.5, ordervalue: 50 },
          { quantity: 300, price: 3.5, ordervalue: 1050 },
          { quantity: 50, price: 2.5, ordervalue: 125 },
        ],
      },
      apple: {
        graphData: [
          { stock: "apple", month: "Jan", price: 9 },
          { stock: "apple", month: "Feb", price: 15 },
          { stock: "apple", month: "Mar", price: 14.56 },
          { stock: "apple", month: "Apr", price: 27.58 },
          { stock: "apple", month: "May", price: 8.75 },
          { stock: "apple", month: "Jun", price: 10.85 },
        ],
        buyMarketData: [
          { quantity: 50, price: 4.5, ordervalue: 225 },
          { quantity: 300, price: 3.2, ordervalue: 960 },
          { quantity: 40, price: 1.5, ordervalue: 60 },
          { quantity: 500, price: 2.5, ordervalue: 1250 },
        ],
        sellMarketData: [
          { quantity: 30, price: 5.5, ordervalue: 165 },
          { quantity: 200, price: 4.2, ordervalue: 840 },
          { quantity: 20, price: 2.5, ordervalue: 50 },
          { quantity: 300, price: 3.5, ordervalue: 1050 },
          { quantity: 50, price: 2.5, ordervalue: 125 },
        ],
      },
      bitcoin: {
        graphData: [
          { stock: "bitcoin", month: "Jan", price: 20 },
          { stock: "bitcoin", month: "Feb", price: 40 },
          { stock: "bitcoin", month: "Mar", price: 55.56 },
          { stock: "bitcoin", month: "Apr", price: 6.58 },
          { stock: "bitcoin", month: "May", price: 25.75 },
          { stock: "bitcoin", month: "Jun", price: 35.85 },
        ],
        buyMarketData: [
          { quantity: 10, price: 18.5, ordervalue: 185 },
          { quantity: 100, price: 15.2, ordervalue: 1520 },
          { quantity: 5, price: 12.5, ordervalue: 62.5 },
          { quantity: 50, price: 17.5, ordervalue: 875 },
        ],
        sellMarketData: [
          { quantity: 20, price: 22.5, ordervalue: 450 },
          { quantity: 80, price: 19.2, ordervalue: 1536 },
          { quantity: 10, price: 15.5, ordervalue: 155 },
          { quantity: 150, price: 20.5, ordervalue: 3075 },
          { quantity: 30, price: 19.5, ordervalue: 585 },
        ],
      },
      microsoft: {
        graphData: [
          { stock: "microsoft", month: "Jan", price: 20 },
          { stock: "microsoft", month: "Feb", price: 4 },
          { stock: "microsoft", month: "Mar", price: 55.56 },
          { stock: "microsoft", month: "Apr", price: 0.58 },
          { stock: "microsoft", month: "May", price: 15.75 },
          { stock: "microsoft", month: "Jun", price: 5.85 },
        ],
        buyMarketData: [
          { quantity: 10, price: 18.5, ordervalue: 185 },
          { quantity: 100, price: 15.2, ordervalue: 1520 },
          { quantity: 5, price: 12.5, ordervalue: 62.5 },
          { quantity: 50, price: 17.5, ordervalue: 875 },
        ],
        sellMarketData: [
          { quantity: 20, price: 22.5, ordervalue: 450 },
          { quantity: 80, price: 19.2, ordervalue: 1536 },
          { quantity: 10, price: 15.5, ordervalue: 155 },
          { quantity: 150, price: 20.5, ordervalue: 3075 },
          { quantity: 30, price: 19.5, ordervalue: 585 },
        ],
      },
    };


  const CurrentMarketData = [
    {
      code: 'google',
      marketCap: 500,
      priceNetVariation: '+0.5',
    },
    {
      code: 'apple',
      marketCap: 700,
      priceNetVariation: '+8.5',
    },
    {
        code: 'amazon',
        marketCap: 52500,
        priceNetVariation: '+2.5',
     
      },
      {
        code: 'bitcoin',
        marketCap: 86500,
        priceNetVariation: '+10.5',
     
      },
    
      {
        code: 'microsoft',
        marketCap: 58500,
        priceNetVariation: '+24.5',
     
      },
      {
        code: 'facebook',
        name: 'Company ABC',
        marketCap: 5008,
        priceNetVariation: '+12.5',
     
      },
   
  ];

  export {CurrentMarketData, stockData}