import * as React from 'react';

interface Props {
  initValue?: number;
  onChange: (newValue: number) => void;
}

interface State {
  value: number;
}

class NumberInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { value: this.props.initValue || 0 };
  }

  public render() {
    return (
      <input
        className="NumberInput"
        type="number"
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    this.setState({ value });
    this.props.onChange(value);
  }
}

export default NumberInput;
