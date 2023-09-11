import blackObelisk from '../img/blackObelisk.png';
import bubbleBomb from '../img/bubbleBomb.png';
import hangingWeb from '../img/hangingWeb.png';
import slapgrass from '../img/hangingWeb.png';


export const PLANTS = [
    {
        id: 1,
        type: 'algae',
        name: 'Hanging Web',
        classification: 'Phaeophyceae electrofilum',
        description: 'Thin red or reddish-brown strands of photosynthetic fibers found in damp, shaded environments, usually on tall fungi in fungal groves or sometimes on rock formations. Nodes attached with pseudo-roots at the surface sprout thin, hair-like threads. During the buildup to electrical storms common in the warmer months, these appear to gain a mild charge and float in the air until they make contact with another surface, where they attach to form a web-like structure. The strands appear to be regenerative.',
        tags: ["electrical hazard", "handle carefully", "safe to observe"],
        image: hangingWeb
    },
    {
        id: 2,
        type: 'vascular',
        name: "Bubble Bomb",
        classification: "Monophyllaea Explosispora",
        description: "This organism produces a single cluster of tightly packed gray or purple pods containing gametes. A tightly-knit, semi-transparent pinkish membrane thought to be a specialized leaf-like structure expands to form around the organism, giving it its distinctive appearance. The leaves produce a gas tentatively identified as methaneselenol, which is theorized to aid in fertilization of the seedpods. As the seeds mature and the pressure builds up inside the bubble, the plant begins to emit a strong odor and eventually bursts. The sudden contact with open air creates a minor explosion, sending the seeds up to 15 meters out, more if assisted by wind. Bubble bombs colonies are commonly found everywhere on plains and open slopes. While the gas is not harmful in small quantities, its long-term effects are unclear; when walking through bubble bomb colonies, it is recommended to watch your step and wear a mask.",
        tags: ["breathing hazard", "handle carefully", "observe carefully"],
        image: bubbleBomb
    },
    {
        id: 3,
        type: 'fungi',
        name: "Black Obelisk",
        classification: "Mycalitus solitarius",
        description: "These imposing black or dark-brown stalks are tough but smooth to the touch, and up to 5 meters tall. Unlike other fungi that have taken the evolutionary niche of trees, they lack anything resembling bark or a canopy. A few bulbous outgrowths along the edges of the stalk release spores in the warmer months of the year, and shrink during the colder months. The stalks are typically spaced far apart from each other, and the mycelial network connecting individual stalks can extend for several kilometers long. The purpose of this adaptation is unclear. The obelisks have been found in plains, deserts, mountainous slopes, among groves of other mushrooms, in floodplains, and even in shallow ponds.",
        tags: ["safe to handle", "safe to observe"],
        image: blackObelisk
    },
    {
        id: 4,
        type: 'vascular',
        name: "Slapgrass",
        classification: "Sanguinocarpa adhærens",
        description: "This dark red grass possesses barbed blades and is covered with a sticky substance, which appears to aid it in digestion of small insects. The blades can grow up to half a meter in length, though the root system is typically quite shallow. It is usually found in shaded, damp environments, typically  low-lying cave entrances or fugal groves. Avoid skin contact; the substance covering the plant is an irritant.",
        tags: ["skin irritant", "handle carefully", "safe to observe"],
        image: slapgrass
    }

];


