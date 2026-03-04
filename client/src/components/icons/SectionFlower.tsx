import type { SVGProps } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSectionFlower = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        viewBox="0 0 25 29"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path fill="url(#section-flower_svg__a)" d="M25 0H0v28.929h25z" />
        <defs>
            <pattern
                id="section-flower_svg__a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use
                    xlinkHref="#section-flower_svg__b"
                    transform="matrix(.00255 0 0 .0022 -.01 0)"
                />
            </pattern>
            <image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAHFCAYAAADc/K+IAAAAAXNSR0IArs4c6QAAIABJREFUeF7sfQmcHFXxf1XPzIZAgE0QvABBUOTwgoAQ8Fh2+vVkQwznoiggiIqieKECikQ88EJ/iDeKJwoLgpC4mfd6wijHBjCAKCoif1BURIVkE0Li7sx0/T8PJhiSPbpn+njXXe/zyYeP7ntV3/rWm67ud1QhcGMGOmEAAYA6GchjUs0A+z3V7gsbvJ4O3JgBZoAZYAaYgcAMcAAJTBkPYAaYAWaAGdAMcADhecAMMAPMADPQEQMcQDqijQdljQFe2s+aR9meOBjgABIHy6yDGWAGmIEMMsABJINOZZOYAWaAGYiDAQ4gcbDMOpgBZoAZyCADHEAy6FQ2Kd0M8H5Muv2XNPo45w8HkKz/F83+c84eDgAAAAAASUVORK5CYII="
                id="section-flower_svg__b"
                width={400}
                height={453}
            />
        </defs>
    </svg>
);
export default SvgSectionFlower;
