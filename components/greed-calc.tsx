'use client'

import React, { useState, ChangeEvent } from 'react';

export function greedCalc(): React.JSX.Element {
  const [goldIng, setGoldIng] = useState<number>(0);
  const [goldBlk, setGoldBlk] = useState<number>(0);
  const [emerald, setEmerald] = useState<number>(0);
  const [emeraldBlk, setEmeraldBlk] = useState<number>(0);
  const [diamond, setDiamond] = useState<number>(0);
  const [diamondBlk, setDiamondBlk] = useState<number>(0);
  const [debris, setDebris] = useState<number>(0);
  const [netherIng, setNetherIng] = useState<number>(0);
  const [netherBlk, setNetherBlk] = useState<number>(0);
  const [egg, setEgg] = useState<number>(0);
  // Perform your math logic here
  const total: number = goldIng + goldBlk * 9 + emerald * 2 + emeraldBlk * 18 + diamond * 4 + diamondBlk * 36 + debris * 8 + netherIng * 36 + netherBlk * 324 + egg * 2048;

  const handleGoldIng = (e: ChangeEvent<HTMLInputElement>): void => {
    setGoldIng(Number(e.target.value));
  };

  const handleGolbBlk = (e: ChangeEvent<HTMLInputElement>): void => {
    setGoldBlk(Number(e.target.value));
  };

  const handleEmerald = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmerald(Number(e.target.value));
  };

  const handleEmeraldBlk = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmeraldBlk(Number(e.target.value));
  };

  const handleDiamond = (e: ChangeEvent<HTMLInputElement>): void => {
    setDiamond(Number(e.target.value));
  };

  const handleDiamondBlk = (e: ChangeEvent<HTMLInputElement>): void => {
    setDiamondBlk(Number(e.target.value));
  };

  const handleDebris = (e: ChangeEvent<HTMLInputElement>): void => {
    setDebris(Number(e.target.value));
  };

  const handleNetherIng = (e: ChangeEvent<HTMLInputElement>): void => {
    setNetherIng(Number(e.target.value));
  };

  const handleNetherBlk = (e: ChangeEvent<HTMLInputElement>): void => {
    setNetherBlk(Number(e.target.value));
  };

  const handleEgg = (e: ChangeEvent<HTMLInputElement>): void => {
    setEgg(Number(e.target.value));
  };

  return (
    <div>
      <div>
        <label htmlFor="goldIng">Gold Ingots: </label>
        <input
          id="goldIng"
          type="number"
          value={goldIng}
          onChange={handleGoldIng}
        />
      </div>

      <div>
        <label htmlFor="goldBlk">Gold Blocks: </label>
        <input
          id="goldBlk"
          type="number"
          value={goldBlk}
          onChange={handleGolbBlk}
        />
      </div>

      <div>
        <label htmlFor="emerald">Emeralds: </label>
        <input
          id="emerald"
          type="number"
          value={emerald}
          onChange={handleEmerald}
        />
      </div>

      <div>
        <label htmlFor="emeraldBlk">Emerald Blocks: </label>
        <input
          id="emeraldBlk"
          type="number"
          value={emeraldBlk}
          onChange={handleEmeraldBlk}
        />
      </div>

      <div>
        <label htmlFor="diamond">Diamonds:</label>
        <input
          id="diamond"
          type="number"
          value={diamond}
          onChange={handleDiamond}
        />
      </div>

      <div>
        <label htmlFor="diamondBlk">Diamond Blocks: </label>
        <input
          id="diamondBlk"
          type="number"
          value={diamondBlk}
          onChange={handleDiamondBlk}
        />
      </div>

      <div>
        <label htmlFor="debris">Ancient Debris: </label>
        <input
          id="debris"
          type="number"
          value={debris}
          onChange={handleDebris}
        />
      </div>

      <div>
        <label htmlFor="netherIng">Netherite Ingots: </label>
        <input
          id="netherIng"
          type="number"
          value={netherIng}
          onChange={handleNetherIng}
        />
      </div>

      <div>
        <label htmlFor="netherBlk">Netherite Blocks: </label>
        <input
          id="netherBlk"
          type="number"
          value={netherBlk}
          onChange={handleNetherBlk}
        />
      </div>

      <div>
        <label htmlFor="egg">Dragon Eggs: </label>
        <input
          id="egg"
          type="number"
          value={egg}
          onChange={handleEgg}
        />
      </div>

      <div>
        Hoard: <span>{total}</span>
      </div>
    </div>
  );
}
