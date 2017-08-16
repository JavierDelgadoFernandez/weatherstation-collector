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

import DS18B20 from "ds18b20";

export default class ClockSensor {
    constructor(sensorID) {
        this.sensorID = sensorID;
    }

    initialize() {
        return new Promise((onsuccess, onerror) =>
            DS18B20.sensors((err, ids) => {
                if (err) {
                    onerror(err);
                }
                if (ids.length === 0) {
                    onerror(new Error("DS18B20 not detected"));
                }
                this.sensorID = ids[0];
                onsuccess();
            }));
    }

    getValues() {
        return new Promise((onsuccess, onerror) =>
            DS18B20.temperature(this.sensorID, (err, value) => {
                if (err) {
                    onerror(err);
                }
                onsuccess({temperature: value});
            }));
    }
}
