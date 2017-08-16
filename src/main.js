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

import BMP280 from "./sensors/BMP280";
import ClockSensor from "./sensors/ClockSensor";
import DS18B20 from "./sensors/DS18B20";

const sensors = [
    new BMP280(),
    new ClockSensor(),
    new DS18B20(),
]

const onMeasurement = (m) => {
    console.log(JSON.stringify(m));
};

Promise.all(sensors.map(s => s.initialize())).then(() => {
    setInterval(() => {
        Promise.all(sensors.map(s => s.getValues())).then(values => {
            onMeasurement(values.reduce((p, v) => ({...p, ...v}), {}));
        });
    }, 1000);
});
