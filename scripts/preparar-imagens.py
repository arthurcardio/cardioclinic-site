"""Prepara as fotos de documentos/03-visual para public/img.
Fotos da clinica: no maximo 2000 px no lado maior, JPG comprimido.
Medicos: mesmo recorte 4:5 (800x1000), fundo branco.
Uso: python3 scripts/preparar-imagens.py
"""
from pathlib import Path
from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
ORIG = RAIZ / "documentos" / "03-visual"
DEST = RAIZ / "public" / "img"

# recortes opcionais (esquerda, topo, direita, base) em fracao da imagem
RECORTE_CLINICA = {
    "fachada": (0.0, 0.10, 0.76, 0.90),      # tira o carro a direita
    "consultorio": (0.0, 0.18, 0.92, 1.0),   # fecha o enquadramento
    "sala-ecg": (0.10, 0.25, 1.0, 0.85),     # fecha na maca e no aparelho
}
# deslocamento horizontal do recorte dos medicos (0 = esquerda, 1 = direita)
FOCO_MEDICO = {"dra-barbara-goncales-olivo": 0.25}

def clinica():
    for f in sorted((ORIG / "clinica").glob("*.jpg")):
        im = Image.open(f).convert("RGB")
        if f.stem in RECORTE_CLINICA:
            l, t, r, b = RECORTE_CLINICA[f.stem]
            w, h = im.size
            im = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
        im.thumbnail((2000, 2000), Image.LANCZOS)
        out = DEST / "clinica" / f.name
        im.save(out, quality=82, optimize=True, progressive=True)
        print(f"{f.name}: {f.stat().st_size//1024} KB -> {out.stat().st_size//1024} KB {im.size}")

def medicos():
    for f in sorted((ORIG / "medicos").glob("*.png")):
        im = Image.open(f).convert("RGBA")
        fundo = Image.new("RGBA", im.size, (255, 255, 255, 255))
        fundo.alpha_composite(im)
        im = fundo.convert("RGB")
        w, h = im.size
        alvo_h = int(w * 1.25)
        if alvo_h <= h:
            im = im.crop((0, 0, w, alvo_h))
        else:
            alvo_w = int(h / 1.25)
            x = int((w - alvo_w) * FOCO_MEDICO.get(f.stem, 0.5))
            im = im.crop((x, 0, x + alvo_w, h))
        im = im.resize((800, 1000), Image.LANCZOS)
        out = DEST / "medicos" / (f.stem + ".jpg")
        im.save(out, quality=84, optimize=True, progressive=True)
        print(f"{f.name}: {f.stat().st_size//1024} KB -> {out.stat().st_size//1024} KB")

if __name__ == "__main__":
    (DEST / "clinica").mkdir(parents=True, exist_ok=True)
    (DEST / "medicos").mkdir(parents=True, exist_ok=True)
    clinica()
    medicos()
