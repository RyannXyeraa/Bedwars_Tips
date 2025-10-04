function tampilkan(materi) {
  let konten = document.getElementById("konten");

  if (materi === "bridging") {
    konten.innerHTML = `
      <h3>Bridging Cepat</h3>
      <p>Bridging adalah teknik membangun jembatan dengan cepat untuk mencapai pulau musuh. 
      Latih timing klik kiri-kanan dan jangan lupa sneaking biar gak jatuh.</p>
    `;
  } else if (materi === "pvp") {
    konten.innerHTML = `
      <h3>Teknik PvP</h3>
      <p>Gunakan W-tap atau S-tap untuk knockback lebih jauh. 
      Jangan lupa block-hit supaya lebih tahan damage. 
      Latihan aim juga penting!</p>
    `;
  } else if (materi === "rush") {
    konten.innerHTML = `
      <h3>Strategi Rush</h3>
      <p>Rush awal penting supaya bisa menghancurkan bed musuh secepatnya. 
      Gunakan wool untuk bridging, beli pickaxe/axe untuk menghancurkan bed musuh.</p>
    `;
  } else if (materi === "defense") {
    konten.innerHTML = `
      <h3>Bed Defense</h3>
      <p>Jaga bed-mu dengan kombinasi blok berbeda (misalnya endstone + kayu). 
      Jangan terlalu tebal, tapi cukup bikin musuh susah hancurin cepat.</p>
    `;
  } else if (materi === "resource") {
    konten.innerHTML = `
      <h3>Resource Management</h3>
      <p>Atur penggunaan iron, gold, dan emerald dengan bijak. 
      Prioritaskan armor dan senjata dulu, lalu utility seperti fireball.</p>
    `;
  } else if (materi === "fireball") {
    konten.innerHTML = `
      <h3>Fireball & Tools</h3>
      <p>Gunakan fireball untuk knockback musuh dari jembatan, atau buat "fireball jump" agar cepat sampai ke tempat tertentu. 
      Tools (pickaxe/axe) wajib buat menghancurkan defense.</p>
    `;
  } else if (materi === "endgame") {
    konten.innerHTML = `
      <h3>Endgame Tips</h3>
      <p>Di late game, fokus beli ender pearl, golem, dan potion (invisibility/jump). 
      Selalu awas map agar tidak diserang mendadak. 
      Gunakan compass untuk melacak musuh terakhir.</p>
    `;
  }
}
