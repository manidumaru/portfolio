import shopifyhome from '@/public/ProjectAssets/ShopifyScreenshots/shopifyhome.png'
import analytics from '@/public/ProjectAssets/ShopifyScreenshots/analytics.png'
import cart from '@/public/ProjectAssets/ShopifyScreenshots/cart.png'
import login from '@/public/ProjectAssets/ShopifyScreenshots/login.png'
import payment from '@/public/ProjectAssets/ShopifyScreenshots/payment.png'
import product from '@/public/ProjectAssets/ShopifyScreenshots/product.png'
import settings from '@/public/ProjectAssets/ShopifyScreenshots/settings.png'

import zooviesHome from "@/public/ProjectAssets/MovieLibraryScreenshots/homepage.jpg"
import movieDesc from "@/public/ProjectAssets/MovieLibraryScreenshots/moviesLibrary.png"
import castList from "@/public/ProjectAssets/MovieLibraryScreenshots/591d6da8-6f77-4cbd-b0fd-244ab0f12671.jpg"

import bookversehome from "@/public/ProjectAssets/BookverseScreenshots/home.png";
import bookdetails from "@/public/ProjectAssets/BookverseScreenshots/bookdetails.png";
import checkout from "@/public/ProjectAssets/BookverseScreenshots/checkout.png";
import mybooks from "@/public/ProjectAssets/BookverseScreenshots/mybooks.png";

import { StaticImageData } from 'next/image'


type TechStack = string[]

type Images = StaticImageData[]

export interface IndividualProject  {
    id: number;
    name: string;
    tagline: string;
    description: string;
    techStack: TechStack;
    liveUrl: string;
    images: Images;
    githubURL: string;
}

export interface ProjectType {
    [key: string]: IndividualProject
}

export const PROJECT_DATA: ProjectType= {
   Shopify:  {
        id: 1,
        name: "Shopify",
        tagline: "E-Commerce Platform",
        description: "Shopify is an e-commerce platformwhere an admin is able to manage products, their variants and analytics. Authenticated users can buy the listed products.",
        techStack: ["Next.js", "Next Auth", "Postgres", "Drizzle ORM", "NeonDB"],
        liveUrl: "https://shopify-flax.vercel.app/",
        images: [shopifyhome, analytics, cart, login, payment, product, settings],
        githubURL: "https://github.com/manidumaru/shopify"
    },
    Zoovies:  {
        id: 2,
        name: "Zoovies",
        tagline: "Films of interest",
        description: "A library of movies and tvshows where users can discover based on their interest. A sleek UI for a pleasant user experience.",
        techStack: ["Next.js"],
        liveUrl: "",
        images: [zooviesHome, movieDesc, castList],
        githubURL: "https://github.com/manidumaru/movielibrary"
    },
    Bookverse:  {
        id: 3,
        name: "Bookverse",
        tagline: "Blockchain based NFT marketplace",
        description: "A blockchain based marketplace where users can buy and sell books as NFTs. Ethereum is used as the digital currency and metamask as the wallet.",
        techStack: ["Solidity", "Next.js", "Ethereum", "Tailwind CSS", "Hardhat"],
        liveUrl: "",
        images: [bookversehome, mybooks, checkout, bookdetails],
        githubURL: "https://github.com/manidumaru/Bookverse"
    },
    DeVote:  {
        id: 4,
        name: "De-Vote",
        tagline: "Decentralized Voting system",
        description: "Blockchain based decentralized voting web application.",
        techStack: ["Solidity", "Next.js", "Ethereum", "Tailwind CSS", "Hardhat"],
        liveUrl: "",
        images: [shopifyhome, analytics, cart, login, payment, product, settings],
        githubURL: "https://github.com/manidumaru/DeVote"
    },
    Baghchal:  {
        id: 5,
        name: "Baghchal",
        tagline: "Classic Baghchal game playing",
        description: "Play the classic Nepali game of baghchal with other players or against the bot.",
        techStack: ["Next.js", "Tailwind", "Django", "Socket.io", "Redis"],
        liveUrl: "",
        images: [shopifyhome, analytics, cart, login, payment, product, settings],
        githubURL: "https://github.com/orgs/baghchalai/dashboard"
    },
}