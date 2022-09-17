export const ColoredLine = ({ color, width } : {color: any, width: number}) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 10,
            width: width,
        }}
    />
);