'use client'

import React, { useState, ChangeEvent } from 'react';

export function GreedCalc(): React.JSX.Element {
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
  const total: number = goldIng + goldBlk * 9 + emerald * 2 + emeraldBlk * 18 + diamond * 4 + diamondBlk * 36 + debris * 8 + netherIng * 36 + netherBlk * 324 + egg * 2048 || 0;

  return (
    <div>
      <div>
              {[
                { id: "goldIng", label: "Gold Ingots", value: goldIng, setter: setGoldIng },
                { id: "goldBlk", label: "Gold Blocks", value: goldBlk, setter: setGoldBlk },
                { id: "emerald", label: "Emeralds", value: emerald, setter: setEmerald },
                { id: "emeraldBlk", label: "Emerald Blocks", value: emeraldBlk, setter: setEmeraldBlk },
                { id: "diamond", label: "Diamonds", value: diamond, setter: setDiamond },
                { id: "diamondBlk", label: "Diamond Blocks", value: diamondBlk, setter: setDiamondBlk },
                { id: "debris", label: "Ancient Debris", value: debris, setter: setDebris },
                { id: "netherIng", label: "Netherite Ingots", value: netherIng, setter: setNetherIng },
                { id: "netherBlk", label: "Netherite Blocks", value: netherBlk, setter: setNetherBlk },
                { id: "egg", label: "Dragon Eggs", value: egg, setter: setEgg },
              ].map((item) => (
                <div key={item.id}>
                  <label htmlFor={item.id}>
                    {item.label}{": "}
                  </label>
                  <input
                    id={item.id}
                    type="number"
                    min="0"
                    value={item.value === 0 ? "" : item.value}
                    placeholder="0"
                    onChange={(e) => item.setter(Number(e.target.valueAsNumber))}
                     />
                </div>
              ))}
            </div>

      <div>
        Hoard: <span>{total}</span>
      </div>
    </div>
  );
}
