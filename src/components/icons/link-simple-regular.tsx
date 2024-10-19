import IconWrapper, { type IconProps } from './icon-wrapper';

export default function LinkSimpleRegular(props: IconProps) {
    return (
        <IconWrapper {...props}>
            <rect width='256' height='256' fill='none' />
            <line
                x1='96'
                y1='160'
                x2='160'
                y2='96'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
            />
            <path
                d='M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
            />
            <path
                d='M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
            />
        </IconWrapper>
    );
}
