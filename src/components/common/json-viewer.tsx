'use client';
import dynamic from 'next/dynamic';

const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

export interface JsonViewerProps {
    name?: string;
    data?: any;
    expanded?: boolean;
}

const REACT_JSON_THEME = 'ocean';
const REACT_JSON_STYLES = {
    backgroundColor: 'rgb(15, 23, 42)',
    fontSize: '0.778rem',
};

export default function JsonViewer({ name = 'root', data = {}, expanded }: JsonViewerProps) {
    return (
        <div className='block max-w-full p-4 pb-3 bg-slate-900'>
            <ReactJson
                name={name}
                src={data}
                theme={REACT_JSON_THEME}
                style={REACT_JSON_STYLES}
                collapsed={!expanded}
            />
        </div>
    );
}
