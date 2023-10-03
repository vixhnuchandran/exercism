//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
      this.series = series;
      if (this.series === '') throw new Error("series cannot be empty");
  }

  slices(sliceLength) {
      if (sliceLength > this.series.length) throw new Error("slice length cannot be greater than series length");
      if (sliceLength === 0) throw new Error("slice length cannot be zero");
      if (sliceLength < 0) throw new Error("slice length cannot be negative");
      
      const chunks = [];
      for (let i = 0; i + sliceLength <= this.series.length; i++ ) {
          const chunk = this.series.slice(i, i + sliceLength);
          chunks.push(Array.from(chunk).map(Number));
      }
      return chunks;
  }
} 