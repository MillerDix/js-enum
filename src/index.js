const JSEnum = (config) => {
  if (!config || !Array.isArray(config)) {
    throw new Error("config needs to be array");
  }
  let _nextValue = 0;
  let _enum = {};
  let _values = [];

  for (let i = 0; i < config.length; i++) {
    const { key, value, label } = config[i];
    if (!(key && typeof key === "string")) {
      console.warn(`config[${i}].key is required a string`);
      continue;
    }

    if (
      !(
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "undefined"
      )
    ) {
      console.warn(`config[${i}].value is required a string or a number`);
      continue;
    }

    const tmpLabel = label || label === 0 ? label : key;

    if (value || value === 0) {
      _enum[(_enum[key] = value)] = tmpLabel;
      _values.push({ value, label: tmpLabel });

      if (typeof value === "number") {
        _nextValue = value + 1;
      }
    } else {
      console.log(tmpLabel, _nextValue);
      _enum[(_enum[key] = _nextValue)] = tmpLabel;
      _values.push({ value: _nextValue, label: tmpLabel });
      _nextValue += 1;
    }
  }

  _enum.getValues = () => _values;
  _enum = Object.freeze(_enum);
  _values = Object.freeze(_values);

  return _enum;
};

export default JSEnum;
