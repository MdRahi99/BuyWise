import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../Assets/banner.jpg";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";

const Banner = () => {
    return (
        <div className="glass my-6 mx-4 rounded-2xl relative border-y-2 border-slate-900 p-2">
            <div className="opacity-50">
                <img className="object-cover h-96 w-full rounded-2xl" src={img} alt="home-bg" />
            </div>
            <div className="absolute w-full top-36 left-0 text-center">
                <h2 className="text-2xl lg:text-3xl mb-8">
                    Budget Shopping with{" "}
                    <span className="border-slate-900 p-2 text-3xl rounded-lg text-slate-900 border-y-2 border-dashed font-bold">
                        BuyWise
                    </span>
                </h2>
                <p className="text-xl mb-12">Easy, Fast, Reliable.</p>
                <div className="">
                    <Link
                        to="/products"
                        className="px-4 py-2 bg-slate-900 hover:bg-white text-white hover:text-slate-900 font-bold rounded"
                    >
                        Explore
                    </Link>
                </div>
            </div>
            <div className="lg:flex md:flex flex-col hidden gap-4 text-3xl absolute bottom-36 right-10 text-slate-900">
                <FaFacebook className="hover:text-slate-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></FaFacebook>
                <FaInstagram className="hover:text-slate-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></FaInstagram>
                <FaLinkedin className="hover:text-slate-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></FaLinkedin>
            </div>
        </div>
    );
};

export default Banner;