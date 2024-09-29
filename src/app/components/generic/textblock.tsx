import React, { ReactNode } from "react";

interface TextCodeBoxProps {
    tagsText: string;
    tagsColor: string;
    children: ReactNode;
}

export default function TextCodeBox({ tagsText, tagsColor, children }: TextCodeBoxProps) {
    return (
        <div className="flex flex-col">
            <h1 style={{color: tagsColor}} className='font-martian text-sm font-extrabold mb-1'>&lt;{tagsText}&gt;</h1>
            <div className="flex-children">
                { children }
            </div>
            <h1 style={{color: tagsColor}} className='font-martian text-sm flex-child font-extrabold justify-end self-end mt-1' >&lt;/{tagsText}&gt;</h1>
        </div>
    )
}