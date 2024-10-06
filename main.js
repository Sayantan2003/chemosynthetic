$(document).ready(function () {
    
    const initRippleEffect = () => {
        try {
            $('.ripple-effect').ripples({
                resolution: 768,
                dropRadius: 15,
                perturbance: 0.05,
                interactive: true,
                crossOrigin: ''
            });
        } catch (e) {
            console.error('Ripple effect initialization failed:', e);
            $('.error').show().text(`Ripple effect error: ${e.message}`);
        }
    };

    const handleMouseMove = (() => {
        const $el = $('.ripple-effect');
        let lastDrop = 0;
        const dropInterval = 50; // ms
        return (e) => {
            const now = Date.now();
            if (now - lastDrop > dropInterval) {
                const { clientX: x, clientY: y } = e;
                const dropRadius = 10 + Math.random() * 10;
                const strength = 0.01 + Math.random() * 0.05;
                $el.ripples('drop', x, y, dropRadius, strength);
                lastDrop = now;
            }
        };
    })();

    initRippleEffect();
    $(document).on('mousemove', handleMouseMove);
});

document.querySelector('.exploreBtn').addEventListener('click', function () {
    const vhvalue = (700/100) * window.innerHeight;
    window.scrollTo({
        top: vhvalue,
        behavior: 'smooth'
    });
    const audio = document.getElementById('waterSound');
    audio.muted = false;
    audio.play();
});

const data = {
    "species": [
        {
            "name": "Bathymodiolus Mussels",
            "scientific_name": "Bathymodiolus thermophilus",
            "physical_characteristics": {
                "length": "Up to 20 cm (8 inches)",
                "color": "Dark brown to black shell",
                "features": "Bathymodiolus mussels have elongated, asymmetrical shells and form large colonies around hydrothermal vents, using a symbiotic relationship with chemosynthetic bacteria for survival."
            },
            "habitat": {
                "location": "Deep-sea hydrothermal vents and cold seeps",
                "depth_range": "1000-3300 meters"
            },
            "diet_and_feeding_habits": "Bathymodiolus mussels host symbiotic bacteria in their gills that oxidize sulfide or methane, providing nutrients, as the mussels lack a digestive system for traditional feeding.",

            "reproduction": "Reproduction occurs through external fertilization, where eggs and sperm are released into the water. The larvae disperse and settle near vents where conditions are favorable for symbiosis.",
            "ecological_role": "Bathymodiolus mussels play a crucial role in vent ecosystems by converting chemical energy into biomass through chemosynthesis, providing food for predators such as crabs and fish.",
            "interesting_facts": "These mussels can thrive in extreme conditions, such as environments with high levels of toxic sulfide or methane, thanks to their bacterial symbionts.",
            "space_relevance": "Similar to other vent organisms, Bathymodiolus mussels' reliance on chemosynthesis makes them a model for potential extraterrestrial life in environments lacking sunlight, like subsurface oceans on moons such as Europa."
        },
        {
            "name": "Polychaete Worms",
            "scientific_name": "Alvinella pompejana",
            "physical_characteristics": {
                "length": "Up to 13 cm (5 inches)",
                "color": "White to pale with bristles along the body",
                "features": "Polychaete worms have segmented bodies with pairs of bristle-like appendages (parapodia) used for movement. Some species, like Alvinella pompejana, can withstand extreme temperatures near hydrothermal vents."
            },
            "habitat": {
                "location": "Deep-sea hydrothermal vents and cold seeps",
                "depth_range": "1000-3000 meters"
            },
            "diet_and_feeding_habits": "Polychaete worms are generally detritivores or scavengers, feeding on organic particles or microorganisms. Some species have symbiotic relationships with bacteria to aid in nutrition in extreme environments.",

            "reproduction": "Polychaete worms reproduce through external fertilization, releasing eggs and sperm into the water column. Larvae are planktonic before settling on the seafloor.",
            "ecological_role": "Polychaete worms play a key role in the deep-sea ecosystem by processing organic material, serving as prey for other animals, and aiding in nutrient cycling around hydrothermal vents.",
            "interesting_facts": "Alvinella pompejana, one of the most heat-tolerant animals on Earth, can survive in temperatures exceeding 176°F (80°C), making them a subject of study for extremophiles.",
            "space_relevance": "Due to their ability to survive in high-temperature, low-oxygen environments, Polychaete worms may offer insights into how life could exist in extreme extraterrestrial environments such as under the icy crust of Europa."
        },
        {
            "name": "Siboglinid Tube Worms",
            "scientific_name": "Siboglinidae (family)",
            "physical_characteristics": {
                "length": "Varies by species; some grow over 2 meters (6.5 feet)",
                "color": "Typically white or pale, with red plumes",
                "features": "Siboglinid tube worms lack a digestive system, instead hosting symbiotic bacteria that help them obtain nutrients through chemosynthesis. They have a long, tubular body encased in a protective tube and display bright red plumes used for gas exchange."
            },
            "habitat": {
                "location": "Hydrothermal vents, cold seeps, and whale falls in deep oceans",
                "depth_range": "1000-4000 meters"
            },
            "diet_and_feeding_habits": "Siboglinid tube worms rely entirely on chemosynthetic bacteria within their bodies to convert hydrogen sulfide or methane into nutrients, as they have no mouth or digestive tract.",
            "reproduction": "These worms reproduce sexually via external fertilization. Eggs and sperm are released into the water, where fertilization occurs. The larvae are planktonic and eventually settle near suitable habitats like hydrothermal vents.",
            "ecological_role": "Siboglinid tube worms are key primary producers in deep-sea ecosystems, converting chemical energy into organic matter through chemosynthesis. This supports other species in vent communities, forming the foundation of the food web.",
            "interesting_facts": "Siboglinid tube worms can live in highly toxic environments where hydrogen sulfide and methane are abundant. Their symbiotic relationship with bacteria allows them to thrive in areas where most organisms cannot survive.",
            "space_relevance": "The ability of Siboglinid tube worms to live without sunlight and rely on chemosynthesis makes them models for life in environments like the icy moons Europa or Enceladus, where similar conditions could support extraterrestrial life."
        },
        {
            "name": "Amphipods",
            "scientific_name": "Amphipoda (order)",
            "physical_characteristics": {
                "length": "Ranges from 1 mm to 34 cm (0.04 inches to 13.4 inches), depending on species",
                "color": "Varies; deep-sea species are often translucent or pale",
                "features": "Amphipods have laterally compressed bodies with no carapace, featuring numerous jointed legs. Deep-sea species are adapted to extreme pressures and cold temperatures, and many exhibit scavenging behavior."
            },
            "habitat": {
                "location": "Widespread in marine environments, including deep-sea trenches, hydrothermal vents, and shallow waters",
                "depth_range": "Surface waters to over 10,000 meters (Mariana Trench)"
            },
            "diet_and_feeding_habits": "Amphipods are omnivorous, feeding on detritus, algae, microorganisms, and scavenging on dead animals. Some species are predators or parasites.",
            "reproduction": "Amphipods reproduce sexually, with internal fertilization. Females carry eggs in a brood pouch until they hatch, and the young are released as miniature adults, bypassing a larval stage.",
            "ecological_role": "Amphipods are important detritivores and scavengers in marine ecosystems, breaking down organic material and recycling nutrients. In deep-sea environments, they contribute to the decomposition of whale falls and other organic matter.",
            "interesting_facts": "Deep-sea amphipods can survive in extreme environments, including the deepest part of the ocean, the Mariana Trench. They exhibit remarkable adaptations to high pressure and cold temperatures, and some species grow to much larger sizes than their shallow-water counterparts (a phenomenon known as 'gigantism').",
            "space_relevance": "The resilience of amphipods in extreme deep-sea conditions, including high pressure and low temperatures, suggests that similar life forms could exist in extraterrestrial oceans, such as those on Europa or Enceladus."
        },
        {
            "name": "Vent Snails",
            "scientific_name": "Lepetodrilus (genus)",
            "physical_characteristics": {
                "length": "Typically less than 3 cm (1.2 inches)",
                "color": "Pale to dark shell, often influenced by the minerals in vent fluids",
                "features": "Vent snails have small, coiled shells, and many species have adaptations such as reinforced shells or sulfur-oxidizing bacteria within their gills, enabling survival in the toxic, mineral-rich vent environments."
            },
            "habitat": {
                "location": "Hydrothermal vents, primarily in the Pacific Ocean",
                "depth_range": "1000-4000 meters"
            },
            "diet_and_feeding_habits": "Vent snails feed on bacteria, detritus, and small particles filtered from vent fluids. Some species harbor symbiotic bacteria that help them convert chemicals like hydrogen sulfide into nutrients.",
            "reproduction": "Reproduction occurs through external fertilization, with eggs and sperm released into the surrounding water. Larvae are planktonic, dispersing before settling near vent habitats.",
            "ecological_role": "Vent snails are integral to vent ecosystems, providing a food source for larger predators and participating in nutrient cycling by grazing on bacterial mats that thrive around hydrothermal vents.",
            "interesting_facts": "Some vent snails have shells reinforced with iron sulfide, an adaptation to the extreme and mineral-rich environment of hydrothermal vents. This gives them a unique durability compared to other snail species.",
            "space_relevance": "Vent snails' ability to thrive in toxic, high-pressure environments, relying on chemosynthesis, makes them a model organism for studying potential life in extraterrestrial environments like the icy moons of the outer solar system, where similar conditions may exist."
        },
        {
            "name": "Vestimentiferan Tube Worms",
            "scientific_name": "Riftia pachyptila",
            "physical_characteristics": {
                "length": "Up to 2.4 meters (7.9 feet)",
                "color": "White tube with bright red plume",
                "features": "Vestimentiferan tube worms lack a digestive system and rely on symbiotic bacteria in their bodies to process chemicals from hydrothermal vent fluids. Their bright red plumes, rich in hemoglobin, are used for absorbing oxygen, carbon dioxide, and hydrogen sulfide from the water."
            },
            "habitat": {
                "location": "Hydrothermal vents along mid-ocean ridges, primarily in the Pacific Ocean",
                "depth_range": "1500-2500 meters"
            },
            "diet_and_feeding_habits": "Vestimentiferan tube worms rely entirely on chemosynthetic bacteria housed within a specialized organ called the trophosome. These bacteria oxidize hydrogen sulfide, producing nutrients that sustain the worm.",
            "reproduction": "Reproduction occurs through external fertilization. Eggs and sperm are released into the water, where fertilization takes place. The larvae are planktonic, eventually settling on the seafloor near hydrothermal vents.",
            "ecological_role": "As primary producers, Vestimentiferan tube worms are critical to the deep-sea vent ecosystem. They form the base of the food web by converting inorganic compounds into organic material, supporting a variety of vent organisms.",
            "interesting_facts": "Vestimentiferan tube worms can survive in extremely toxic and high-temperature environments where hydrogen sulfide, typically lethal to most life, is abundant. They have adapted to life without sunlight by relying on chemosynthesis.",
            "space_relevance": "These tube worms' ability to thrive in environments where sunlight is absent and chemicals provide energy makes them a model for potential life on icy moons, such as Europa, where similar chemical reactions may support ecosystems under ice-covered oceans."
        },
        {
            "name": "Deep-Sea Bivalves",
            "scientific_name": "Vesicomyidae (family)",
            "physical_characteristics": {
                "length": "Ranges from 1 cm to 20 cm (0.4 to 8 inches)",
                "color": "White to pale, with thick shells",
                "features": "Deep-sea bivalves have two-part hinged shells that protect their soft bodies. Many species have symbiotic relationships with chemosynthetic bacteria housed in their gills, allowing them to survive in nutrient-poor environments by utilizing sulfides or methane."
            },
            "habitat": {
                "location": "Hydrothermal vents, cold seeps, and whale falls in deep oceans",
                "depth_range": "500-4000 meters"
            },
            "diet_and_feeding_habits": "Deep-sea bivalves rely on symbiotic bacteria to convert chemicals like hydrogen sulfide or methane into nutrients. Some also filter organic particles from the surrounding water.",
            "reproduction": "Bivalves reproduce sexually, with external fertilization. Eggs and sperm are released into the water, and fertilized eggs develop into free-swimming larvae, eventually settling on the ocean floor.",
            "ecological_role": "Deep-sea bivalves contribute to nutrient cycling in extreme environments, acting as primary consumers and supporting higher organisms in the food chain. Their symbiotic bacteria play a role in detoxifying their habitat by processing harmful chemicals.",
            "interesting_facts": "Some deep-sea bivalves, like those in the family Vesicomyidae, can live for several decades and are known for their ability to survive in environments with extreme pressure and little to no sunlight.",
            "space_relevance": "Their ability to thrive in chemically rich, low-light environments through chemosynthesis makes deep-sea bivalves potential models for life in extraterrestrial oceans, such as those hypothesized to exist on moons like Europa or Enceladus."
        }
    ]
}


const depthInfo = document.querySelector('.depthInfo');
const maxDepth = 6000;
let pageHeight = document.documentElement.scrollHeight - window.innerHeight;

const updateDepthInfo = () => {
    const scrollPercentage = window.scrollY / pageHeight;
    const currentDepth = Math.floor(scrollPercentage * maxDepth);
    depthInfo.textContent = `${currentDepth.toLocaleString()}m`;
    depthInfo.style.color = `hsl(${240 - scrollPercentage * 240}, 100%, ${80 - scrollPercentage * 30}%)`;
};

window.addEventListener('scroll', updateDepthInfo);
window.addEventListener('resize', () => {
    pageHeight = document.documentElement.scrollHeight - window.innerHeight;
});

window.onload = function () {
    const text = document.querySelector("#animatedText");
    const words = text.textContent.split(" ");

    text.innerHTML = words.map(word =>
        `<span class="word">${word.split("").map(char =>
            `<span class="char">${char}</span>`
        ).join("")}</span>`
    ).join(" ");

    gsap.fromTo(".word",
        { opacity: 0, y: 50, rotationX: -90 },
        {
            duration: 2,
            opacity: 1,
            y: 0,
            rotationX: 0,
            ease: "back.out(1.7)",
            stagger: 0.1
        }
    );

    gsap.fromTo(".char",
        { opacity: 0, scale: 0, rotation: 180 },
        {
            duration: 1,
            opacity: 1,
            scale: 1,
            rotation: 0,
            ease: "elastic.out(1, 0.3)",
            stagger: 0.02
        }
    );

    updateDepthInfo(); // Initial update
};

const overlay = document.querySelector('.overlay');

// Function to update the overlay's spotlight position based on mouse coordinates
function updateOverlay(e) {
    const x = e.clientX;
    const y = e.clientY;
    // Update the background radial gradient to center the spotlight at (x, y)
    overlay.style.background = `radial-gradient(circle 100px at ${x}px ${y}px, transparent 100px, rgba(0, 0, 0, 0.95) 100px)`;
}

// Event listener for mouse movement to update the spotlight position
document.addEventListener('mousemove', updateOverlay);

// Optional: Handle touch events for mobile devices to update the spotlight position
document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    overlay.style.background = `radial-gradient(circle 100px at ${x}px ${y}px, transparent 100px, rgba(0, 0, 0, 0.95) 100px)`;
});


// Add click event listeners to all buttons to trigger alerts
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const message = button.getAttribute('data-message');

    });
});

// Initialize spotlight position to center of the screen on page load
window.addEventListener('load', () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    overlay.style.background = `radial-gradient(circle 100px at ${centerX}px ${centerY}px, transparent 100px, rgba(0, 0, 0, 0.95) 100px)`;
});