export const fadeInup = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const fadeInleft = {
    initial: {
        opacity: 0,
        x: 60,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};
export const stagger = {
    initial: {},
    animate: {
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};
export const routeAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.1,
            easy: "easyInOut",
        },
    },
};
