import { useState } from 'react';
import { ChefHat } from 'lucide-react';

export function NavBar() {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
    };

    return (
        <header className="border-b border-gray-200 p-6">
            <div className="container mx-auto flex items-center justify-center gap-2">
                <ChefHat
                    onClick={ handleClick }
                    className={`h-6 w-6 cursor-pointer transition-transform duration-300 
                        ${
                            isAnimating ? 'animate-rotate360' : ''
                        }`
                    }
                />
                <h1 className="text-xl font-semibold">DishCraft</h1>
            </div>
        </header>
    );
}
