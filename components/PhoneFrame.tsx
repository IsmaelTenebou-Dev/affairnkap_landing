import React from 'react';

interface PhoneFrameProps {
    src: string;
    alt?: string;
    className?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ src, alt = "App Screenshot", className = "" }) => {
    return (
        <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[55px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] h-[600px] w-[300px] overflow-hidden ${className}`}>
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-b-[20px] z-50 flex items-center justify-center">
                {/* Camera lens simulation */}
                <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#1a1a1a] shadow-inner"></div>
                    <div className="w-2 h-2 rounded-full bg-[#0d0d0d] self-center"></div>
                </div>
            </div>

            {/* Side Buttons - Volume & Power */}
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

            {/* Screen Content */}
            <div className="rounded-[42px] overflow-hidden w-full h-full bg-white relative">
                <img
                    src={src}
                    className="w-full h-full object-cover"
                    alt={alt}
                />
                {/* Status Bar simulation (Time/Battery) - Optional detail */}
                <div className="absolute top-0 w-full h-10 px-6 flex justify-between items-center z-40 text-black text-[10px] font-bold">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <div className="w-4 h-2.5 border border-black rounded-[2px] relative"><div className="absolute inset-[1px] bg-black"></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
