function Skeleton({ width, height, containerStyle }) {
    return (
        <div
            style={{ width: width, height: height }}
            className={`${containerStyle} clr-white rounded-2 mb-2 skeleton`}
        ></div>
    );
}

export default Skeleton;
