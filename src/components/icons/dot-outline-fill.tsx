import IconWrapper, { type IconProps } from './icon-wrapper';

export default function DotOutlineFill(props: IconProps) {
    return (
        <IconWrapper {...props}>
            <rect width='256' height='256' fill='none' />
            <path d='M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z' />
        </IconWrapper>
    );
}
