import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../UI/Button';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const HeroSection = () => {
    return (
        <div>
            <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
                <NeuralNetworkBackground />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                <span className="block">Dr. Alex Johnson</span>
                                <span className="block text-blue-600 mt-2">AI Researcher & Scientist</span>
                            </h1>

                            <p className="mt-6 text-xl text-gray-600 max-w-lg">
                                Exploring the frontiers of machine learning, computer vision, and natural language processing.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    icon={<ArrowRight />}
                                    iconPosition="right"
                                    onClick={() => {
                                        const element = document.querySelector('#research');
                                        if (element) {
                                            window.scrollTo({
                                                top: element.getBoundingClientRect().top + window.pageYOffset - 80,
                                                behavior: 'smooth',
                                            });
                                        }
                                    }}
                                >
                                    View My Research
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => {
                                        const element = document.querySelector('#contact');
                                        if (element) {
                                            window.scrollTo({
                                                top: element.getBoundingClientRect().top + window.pageYOffset - 80,
                                                behavior: 'smooth',
                                            });
                                        }
                                    }}
                                >
                                    Contact Me
                                </Button>
                            </div>
                        </div>

                        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <img
                                    src="https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="Dr. Alex Johnson"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <a
                            href="#about"
                            className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector('#about');
                                if (element) {
                                    window.scrollTo({
                                        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
                                        behavior: 'smooth',
                                    });
                                }
                            }}
                        >
                            <span className="text-sm mb-2">Scroll Down</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-chevron-down"
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
