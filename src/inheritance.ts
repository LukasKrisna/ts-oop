class Hewan6 {
    nama: string = ''
    kaki: number = 0;

    bernafas() {
        console.log('nafas')
    }
}

class Burung extends Hewan6 {
    warna: string = 'merah'
}

const burung3 = new Burung()
burung3.nama = 'kenari'
burung3.kaki = 2
burung3.warna = 'kuning'
console.log(burung3)
burung3.bernafas()
