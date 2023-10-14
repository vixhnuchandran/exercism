//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const tournamentTally = (input) => {
  let output = "Team                           | MP |  W |  D |  L |  P";
  if (input.length === 0) {
    return output;
  }

  input = input.split("\n").map((result) => result.split(";"));

  let tally = {};

  for (const match of input) {
    for (let player = 0; player < 2; player++) {
      let { mp, w, d, l, p } = tally[match[player]] || {
        mp: 0,
        w: 0,
        d: 0,
        l: 0,
        p: 0,
      };

      if (match[2] === "draw") {
        d++;
      } else if (player) {
        if (match[2] === "loss") {
          w++;
        }
      } else {
        if (match[2] === "win") {
          w++;
        }
      }

      if (player) {
        if (match[2] === "win") {
          l++;
        }
      } else {
        if (match[2] === "loss") {
          l++;
        }
      }

      p = 3 * w + d;

      tally[match[player]] = { mp: mp + 1, w, d, l, p };
    }
  }

  tally = Object.entries(tally)
    .sort(([a, c], [b, d]) => d.p - c.p || a.localeCompare(b))
    .reduce((t, p) => ({ ...t, [p[0]]: p[1] }), {});

  for (const player in tally) {
    let { mp, w, d, l, p } = tally[player];

    output += `\n${player.padEnd(31, " ")}|${mp
      .toString()
      .padStart(3, " ")} |${w.toString().padStart(3, " ")} |${d
      .toString()
      .padStart(3, " ")} |${l.toString().padStart(3, " ")} |${p
      .toString()
      .padStart(3, " ")}`;
  }

  return output;
};
