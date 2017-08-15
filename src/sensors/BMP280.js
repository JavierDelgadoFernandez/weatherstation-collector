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

import bme280Sensor from "bme280-sensor";

export default class BMP280 {
    constructor() {
        const options = {
            i2cAddress: bme280Sensor.BME280_DEFAULT_I2C_ADDRESS(),
            i2cBusNo: 1,
        };

        this.sensor = new bme280Sensor(options);
    }

    async initialize() {
        await this.sensor.init();
    }

    async getValues() {
        const data = await this.sensor.readSensorData();
        return {pressure: data.pressure_hPa};
    }
}
