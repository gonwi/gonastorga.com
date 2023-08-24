export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Gonzalo Astorga",
  birthday: "1996, 1, 18",
  username: "gonastorga",
  description: "Gonzalo's corner of the internet.",
  url: "https://gonastorga.com",
  projects: [
    {
      name: "brainrex",
      description:
        "A machine learning inference API for NLP, anomaly detection and forecasting.",
      url: "https://brainrex.com",
    },
    {
      name: "bitlongs",
      description:
        "An invesment research chatbot using Llama2, langchain and the Brainrex API.",
      url: "https://bitlongs.com",
    },
    {
      name: "honey-finance",
      description:
        "Liquidity solutions for NFTs and allows you to access DeFi through your NFTs.",
      url: "https://honey.finance",
    },
    {
      name: "celo-etl",
      description:
        "Python scripts for ETL  jobs for Celo blockchain blocks and transactions.",
      url: "https://github.com/brainrexAI/celo-etl",
    },
    {
      name: "candy-shop-nextjs",
      description: "An open source ETH, Solana NFT Storefront & Auctions frontend.",
      url: "https://github.com/LIQNFT/candy-shop-storefront-nextjs",
    },
    {
      name: "gem-farm-refresh",
      description: "A script for crancking gem-farm fixed rate NFT Staking farms.",
      url: "https://github.com/gemworks/gem-farm-refresh",
    },
  ],
};
