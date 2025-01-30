Bootcamp Phincon Batch 3 Documentation
----------

# Langkah-langkah Perhitungan Jumlah Blok dalam Kontainer

# Dimensi Kontainer:

-   **Panjang**: 605 cm
-   **Lebar**: 244 cm
-   **Tinggi**: 259 cm

#### Dimensi Blok:

-   **Panjang**: 205 cm
-   **Lebar**: 87 cm
-   **Tinggi**: 80 cm

----------

### Kombinasi Orientasi Blok

Blok dapat diputar dalam **6 orientasi** berbeda:

1.  **(Panjang, Lebar, Tinggi)** = (205, 87, 80)
2.  **(Panjang, Tinggi, Lebar)** = (205, 80, 87)
3.  **(Lebar, Panjang, Tinggi)** = (87, 205, 80)
4.  **(Lebar, Tinggi, Panjang)** = (87, 80, 205)
5.  **(Tinggi, Panjang, Lebar)** = (80, 205, 87)
6.  **(Tinggi, Lebar, Panjang)** = (80, 87, 205)

----------

### Rumus Menghitung Jumlah Blok:

Jumlah Blok=⌊Panjang KontainerPanjang Blok⌋×⌊Lebar KontainerLebar Blok⌋×⌊Tinggi KontainerTinggi Blok⌋\text{Jumlah Blok} = \left\lfloor \frac{\text{Panjang Kontainer}}{\text{Panjang Blok}} \right\rfloor \times \left\lfloor \frac{\text{Lebar Kontainer}}{\text{Lebar Blok}} \right\rfloor \times \left\lfloor \frac{\text{Tinggi Kontainer}}{\text{Tinggi Blok}} \right\rfloor

----------

### Perhitungan Setiap Orientasi:

1.  **Orientasi (205, 87, 80):**
    
    -   Panjang: ⌊605205⌋=2\left\lfloor \frac{605}{205} \right\rfloor = 2
    -   Lebar: ⌊24487⌋=2\left\lfloor \frac{244}{87} \right\rfloor = 2
    -   Tinggi: ⌊25980⌋=3\left\lfloor \frac{259}{80} \right\rfloor = 3
    -   **Jumlah Blok**: 2×2×3=122 \times 2 \times 3 = 12
2.  **Orientasi (205, 80, 87):**
    
    -   Panjang: ⌊605205⌋=2\left\lfloor \frac{605}{205} \right\rfloor = 2
    -   Lebar: ⌊24480⌋=3\left\lfloor \frac{244}{80} \right\rfloor = 3
    -   Tinggi: ⌊25987⌋=2\left\lfloor \frac{259}{87} \right\rfloor = 2
    -   **Jumlah Blok**: 2×3×2=122 \times 3 \times 2 = 12
3.  **Orientasi (87, 205, 80):**
    
    -   Panjang: ⌊60587⌋=6\left\lfloor \frac{605}{87} \right\rfloor = 6
    -   Lebar: ⌊244205⌋=1\left\lfloor \frac{244}{205} \right\rfloor = 1
    -   Tinggi: ⌊25980⌋=3\left\lfloor \frac{259}{80} \right\rfloor = 3
    -   **Jumlah Blok**: 6×1×3=186 \times 1 \times 3 = 18
4.  **Orientasi (87, 80, 205):**
    
    -   Panjang: ⌊60587⌋=6\left\lfloor \frac{605}{87} \right\rfloor = 6
    -   Lebar: ⌊24480⌋=3\left\lfloor \frac{244}{80} \right\rfloor = 3
    -   Tinggi: ⌊259205⌋=1\left\lfloor \frac{259}{205} \right\rfloor = 1
    -   **Jumlah Blok**: 6×3×1=186 \times 3 \times 1 = 18
5.  **Orientasi (80, 205, 87):**
    
    -   Panjang: ⌊60580⌋=7\left\lfloor \frac{605}{80} \right\rfloor = 7
    -   Lebar: ⌊244205⌋=1\left\lfloor \frac{244}{205} \right\rfloor = 1
    -   Tinggi: ⌊25987⌋=2\left\lfloor \frac{259}{87} \right\rfloor = 2
    -   **Jumlah Blok**: 7×1×2=147 \times 1 \times 2 = 14
6.  **Orientasi (80, 87, 205):**
    
    -   Panjang: ⌊60580⌋=7\left\lfloor \frac{605}{80} \right\rfloor = 7
    -   Lebar: ⌊24487⌋=2\left\lfloor \frac{244}{87} \right\rfloor = 2
    -   Tinggi: ⌊259205⌋=1\left\lfloor \frac{259}{205} \right\rfloor = 1
    -   **Jumlah Blok**: 7×2×1=147 \times 2 \times 1 = 14

----------

### Hasil Akhir:

-   **Jumlah Maksimum Blok**: 18 blok
-   **Orientasi Paling Efisien**:
    -   **(Lebar, Panjang, Tinggi)** = (87, 205, 80)
    -   **(Lebar, Tinggi, Panjang)** = (87, 80, 205)

----------