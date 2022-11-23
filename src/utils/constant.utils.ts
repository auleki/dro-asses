export const colors = {
    primary: {
        green: "#0C3b2e",
        yellow: "#FFBA00",
        white: "#fff",
        gray: "#737373",
        black: "#1a1a1a"
    },
    secondary: {
        green: "#093227",
        green200: "#0A4334",
        gray: "#9E9E9E"
    },
    glass: {
        // add glassmorphic background colors
        green200: "rgba(0, 0, 0, 0.28)",
        white: "rgba(255, 255, 255, 0.28)"
    },
    gradients: {
        green: "linear-gradient(to right, #ffffff60, #ffffff90), url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1668272596/dark_fkhriv.jpg')",
        greenPurple: "linear-gradient(to bottom, #00000050, #00000090), url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1668272596/dark_fkhriv.jpg')"
    }
}

export const appTheme = {
    dark: {
        bg: colors.secondary.green200,
        bgGradient: colors.gradients.greenPurple,
        bgImage: "url(https://res.cloudinary.com/dyj6pqx6d/image/upload/v1668272596/dark_fkhriv.jpg)",
        textColor: colors.primary.yellow,
        buttonBg: colors.primary.green,
        buttonText: colors.primary.white,
        cardBg: colors.glass.green200,
        cardText: colors.primary.white,
        cardSubtitle: colors.primary.gray,
        cardIcon: colors.primary.green,
        cardInfo: colors.primary.yellow,
        authorTagBg:colors.secondary.green,
        authorTagText:colors.secondary.gray,
        searchBarText: colors.primary.yellow,
        shadow: "rgba(0, 0, 0, 0.2)"
    },
    light: {
        bg: colors.primary.white,
        bgGradient: colors.gradients.green,
        bgImage: "url(https://res.cloudinary.com/dyj6pqx6d/image/upload/v1668272537/light_min3gq.jpg)",
        textColor: colors.primary.green,
        buttonBg: colors.primary.yellow,
        buttonText: colors.primary.black,
        cardBg: colors.glass.white,
        cardSubtitle: colors.primary.gray,
        cardIcon: colors.primary.green,
        authorTagBg:colors.secondary.green200,
        authorTagText:colors.secondary.gray,
        cardText: colors.primary.black,
        searchBarText:colors.primary.black,
        shadow: "#394A4690"
    },
    expo: {
        bg: "#fff",
        textColor: "#0C3b2e",
        buttonBg: "#FFBA00",
        buttonText: "#1a1a1a",
        cardBg: "#005E44",
        cardText: "#FFBA00"
    }
}

export const metrics = {
    borderRadius: ".5rem",
    fontSmall: "0.8rem",
    fontNormal: "1rem",
    fontBig: "1.5rem",
    header: "2.5rem"
}

export const fonts = {
    paragraph: "Andika",
    header: "Amatic SC"
}