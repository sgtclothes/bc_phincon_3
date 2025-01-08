const getCubeVolume = (a) => {
    return a * a * a;
};
const getTubeVolume = (a, h) => {
    return Math.PI * a * a * h;
};
const getBallVolume = (r) => {
    return (4 / 3) * Math.PI * r * r * r;
};

export { getCubeVolume, getTubeVolume, getBallVolume };
