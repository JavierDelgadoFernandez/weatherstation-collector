/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import i2cHtu21d from "htu21d-i2c";

export default class HTU21D {
    constructor() {
        this.sensor = new i2cHtu21d();
    }

    async initialize() {

    }

    getValues() {
        return new Promise((onsuccess) => {
            this.sensor.readHumidity(v => onsuccess({humidity: v}));
        });
    }
}
