/* Salve este código como database.js */

const storeProducts = {
    // --- PRODUTO 1: CAMISETA ---
    "camiseta-uxb": {
        name: "Camiseta Oficial UXBrasília",
        description: "Leve o orgulho da comunidade no peito! Nossa camiseta oficial é feita com malha 100% algodão de alta qualidade, garantindo conforto e durabilidade.",
        defaultImage: "/assets/lojinha/camiseta.png", // Imagem padrão
        images: {
            "Preta": { main: "/assets/lojinha/camiseta.png", thumb: "/assets/lojinha/camiseta.png" }
        },
        variations: [
            { sku: "CAM-PRE-P", attributes: { "Cor": "Preta", "Tamanho": "P" }, price: 60.00, stock: 0 },
            { sku: "CAM-PRE-M", attributes: { "Cor": "Preta", "Tamanho": "M" }, price: 60.00, stock: 0 },
            { sku: "CAM-PRE-G", attributes: { "Cor": "Preta", "Tamanho": "G" }, price: 60.00, stock: 0 },
            { sku: "CAM-PRE-G", attributes: { "Cor": "Preta", "Tamanho": "GG" }, price: 60.00, stock: 0 },
            { sku: "CAM-PRE-GG", attributes: { "Cor": "Preta", "Tamanho": "EXG" }, price: 60.00, stock: 0},
           // { sku: "CAM-PRE-GG", attributes: { "Cor": "Preta", "Tamanho": "EXG" }, price: 60.00, stock: 1, onDemand: true },
        ]
    },
    
    // --- PRODUTO 2: COBOGÓ ---
    "cobogo": {
        name: "Cobogó",
        description: "Inspirado nos cobogós das superquadras de Brasília, este elemento vazado é uma releitura moderna do clássico modernista. Produzido em impressão 3D, une o design icônico com a leveza, a variedade de cores e a versatilidade dos novos materiais. Perfeito para quem busca um toque da identidade brasiliense em seu projeto.",
        defaultImage: "/assets/lojinha/UXBrasilia.jpg",
        images: {
            "106 Sul": { main: "/assets/lojinha/106Sul.jpg", thumb: "/assets/lojinha/106Sul.jpg" },
            "202 Sul": { main: "/assets/lojinha/202Sul.jpg", thumb: "/assets/lojinha/202Sul.jpg" },
            "205 Sul": { main: "/assets/lojinha/205Norte.jpg", thumb: "/assets/lojinha/205Norte.jpg" },
            "206 Norte": { main: "/assets/lojinha/206Norte.jpg", thumb: "/assets/lojinha/206Norte.jpg" },
            "402 Sul": { main: "/assets/lojinha/402Sul.jpg", thumb: "/assets/lojinha/402Sul.jpg" },
            "210 Norte": { main: "/assets/lojinha/410Norte.jpg", thumb: "/assets/lojinha/410Norte.jpg" },
            "Bandeira": { main: "/assets/lojinha/Bandeira.jpg", thumb: "/assets/lojinha/Bandeira.jpg" },
            "Margarida": { main: "/assets/lojinha/Margarida.jpg", thumb: "/assets/lojinha/Margarida.jpg" },
            "Tesourinha": { main: "/assets/lojinha/Tesourinha.jpg", thumb: "/assets/lojinha/Tesourinha.jpg" },
            "UXBrasilia": { main: "/assets/lojinha/UXBrasilia.jpg", thumb: "/assets/lojinha/UXBrasilia.jpg" }
            
        },
        variations: [
            { sku: "COB-106", attributes: { "Cor": "106 Sul" }, price: 10.00, stock: 1 },
            { sku: "COB-202", attributes: { "Cor": "202 Sul"}, price: 10.00, stock: 1 },
            { sku: "COB-205", attributes: { "Cor": "205 Sul"}, price: 10.00, stock: 1 },
            { sku: "COB-206", attributes: { "Cor": "206 Norte" }, price: 10.00, stock: 1 },
            { sku: "COB-402", attributes: { "Cor": "402 Sul"}, price: 10.00, stock: 1 },
            { sku: "COB-410", attributes: { "Cor": "210 Norte"}, price: 10.00, stock: 1 },
            { sku: "COB-BAND", attributes: { "Cor": "Bandeira" }, price: 10.00, stock: 1 },
            { sku: "COB-MARG", attributes: { "Cor": "Margarida"}, price: 10.00, stock: 1 },
            { sku: "COB-TES", attributes: { "Cor": "Tesourinha"}, price: 10.00, stock: 1 },
            { sku: "COB-UX", attributes: { "Cor": "UXBrasilia" }, price: 10.00, stock: 1 },

           // { sku: "COB-ORB-TER-PETG", attributes: { "Cor": "Terracota", "Material": "PETG (Externo)" }, price: 55.00, stock: 0, onDemand: true }
        ]
    },

    // --- PRODUTO 3: CANECA ---
    "caneca-comunidade": {
        name: "Caneca da Comunidade",
        description: "Perfeita para o seu café enquanto planeja a sua próxima interface incrível. Cerâmica de alta qualidade com o logo da comunidade.",
        defaultImage: "/assets/lojinha/caneca.png",
        images: {
            "Verde": { main: "/assets/lojinha/caneca.png", thumb: "/assets/lojinha/caneca.png", colorHex: "#359657" },
            "Preta": { main: "/assets/lojinha/caneca.png", thumb: "/assets/lojinha/caneca.png", colorHex: "#000" },
            "Branca": { main: "/assets/lojinha/caneca.png", thumb: "/assets/lojinha/caneca.png", colorHex: "#fff" }
        },
        variations: [
            // Caneca tem apenas variação de cor, não de tamanho ou material.
            { sku: "CAN-BRA", attributes: { "Cor": "Verde" }, price: 15.00, stock: 1 },
            { sku: "CAN-PRE", attributes: { "Cor": "Preta" }, price: 15.00, stock: 1, },
            { sku: "CAN-PRE", attributes: { "Cor": "Branca" }, price: 15.00, stock: 1, }
        ]
    }
};