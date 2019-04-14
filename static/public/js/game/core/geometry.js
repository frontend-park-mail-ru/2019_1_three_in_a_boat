import {CURSOR, MASKS} from './settings.js';

const sqrt3 = 1.7320508075688772;

/**
 * @class Geometry
 */
export default class Geometry {
  /**
   * Check collision of hexagon and cursor
   * @param {Object} hexagon
   * @param {{x: number, y: number}} cursor
   * @return {boolean}
   */
  static checkHexagonCollision(hexagon, cursor) {
    const lines = this.convertHexagonToLines(hexagon);
    let isCollide = false;

    lines.forEach((line) => {
      line = this.rotateLine(line.first, line.second, hexagon.angle);
      isCollide = this._lineAndCursorCollision(line.first, line.second, cursor);
    });

    return isCollide;
  }

  /**
   * Convert hexagon object to array of lines
   * @param {object} hexagon
   * @return {Array} array of lines
   */
  static convertHexagonToLines(hexagon) {
    const lines = [];

    if (hexagon.sides & MASKS.top) {
      lines.push({
        first: {
          x: -hexagon.side / 2,
          y: hexagon.side * sqrt3 / 2,
        },
        second: {
          x: hexagon.side / 2,
          y: hexagon.side * sqrt3 / 2,
        },
      });
    }

    if (hexagon.sides & MASKS.topRight) {
      lines.push({
        first: {
          x: hexagon.side / 2,
          y: hexagon.side * sqrt3 / 2,
        },
        second: {
          x: hexagon.side,
          y: 0,
        },
      });
    }

    if (hexagon.sides & MASKS.bottomRight) {
      lines.push({
        first: {
          x: hexagon.side,
          y: 0,
        },
        second: {
          x: hexagon.side / 2,
          y: -hexagon.side * sqrt3 / 2,
        },
      });
    }

    if (hexagon.sides & MASKS.bottom) {
      lines.push({
        first: {
          x: hexagon.side / 2,
          y: -hexagon.side * sqrt3 / 2,
        },
        second: {
          x: -hexagon.side / 2,
          y: -hexagon.side * sqrt3 / 2,
        },
      });
    }

    if (hexagon.sides & MASKS.bottomLeft) {
      lines.push({
        first: {
          x: -hexagon.side / 2,
          y: -hexagon.side * sqrt3 / 2,
        },
        second: {
          x: -hexagon.side,
          y: 0,
        },
      });
    }

    if (hexagon.sides & MASKS.topLeft) {
      lines.push({
        first: {
          x: -hexagon.side,
          y: 0,
        },
        second: {
          x: -hexagon.side / 2,
          y: hexagon.side * sqrt3 / 2,
        },
      });
    }

    return lines;
  }

  /**
   * Check collision of cursor and line
   * @param {{x: number, y: number}} dot0
   * @param {{x: number, y: number}} dot1
   * @param {{x: number, y: number}} cursor
   * @return {boolean}
   * @private
   */
  static _lineAndCursorCollision(dot0, dot1, cursor) {
    const eps = 1e-10;
    const d0 = {
      x: dot0.x - cursor.x,
      y: dot0.y - cursor.y,
    };
    const d1 = {
      x: dot1.x - cursor.x,
      y: dot1.y - cursor.y,
    };

    const a = d1.x * d1.x + d1.y * d1.y;
    const k = d0.x * d1.x + d0.y * d1.y;
    const c = d0.x * d0.x + d0.y * d0.y - CURSOR.radius * CURSOR.radius;
    const disc = k * k - a * c;

    if (disc < 0) {
      return false;
    } else if (Math.abs(disc) < eps) {
      const t = -k / a;
      return t > -eps && t < 1 + eps;
    } else {
      let t1 = (-k + Math.sqrt(disc)) / a;
      let t2 = (-k - Math.sqrt(disc)) / a;
      if (t1 > t2) {
        const t = t1;
        t1 = t2;
        t2 = t;
      }

      return !(t1 >= 0 - eps && t2 <= 1 + eps) && (t2 > eps && t1 < 1 - eps);
    }
  }

  /**
   * Rotate line on angle
   * @param {{x: number, y: number}} dot0
   * @param {{x: number, y: number}} dot1
   * @param {number} angle
   * @return {{first: *, second: *}}
   */
  static rotateLine(dot0, dot1, angle) {
    dot0 = this.rotateDot(dot0, angle);
    dot1 = this.rotateDot(dot1, angle);
    return {
      first: dot0,
      second: dot1,
    };
  }

  /**
   * Rotate dot on angle
   * @param {{x: number, y: number}} dot
   * @param {number} angle
   * @return {{x: number, y: number}}
   */
  static rotateDot(dot, angle) {
    const newX = dot.x * Math.cos(angle) - dot.y * Math.sin(angle);
    dot.y = dot.x * Math.sin(angle) + dot.y * Math.cos(angle);
    dot.x = newX;
    return dot;
  }

  /**
   * Get coords of cursor center
   * @param {number} cursorAngle
   * @return {{x: number, y: number}}
   */
  static cursorAngleToDot(cursorAngle) {
    return {
      x: CURSOR.radius * Math.cos(cursorAngle),
      y: CURSOR.radius * Math.sin(cursorAngle),
    };
  }
}
