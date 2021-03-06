import React from 'react';
import PropTypes from 'prop-types';
import { FormInput } from "../form-input/form-input.component";
import './autocomplete.styles.scss';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    }
  }

  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion
        .toLowerCase()
        .indexOf(userInput.toLowerCase()
        ) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    })
  }

  onKeydown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  }

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      },
      props: {
        label
      }
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {
              filteredSuggestions.map((suggestion, index) => {
                let className;
                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }
                return (
                  <li className={className}
                    key={suggestion}
                    onClick={onClick}
                  >
                    {suggestion}
                  </li>
                )
              })
            }
          </ul>
        )
      }
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No suggestions</em>
        </div>
      )
    }
    return (
      <React.Fragment>
        <FormInput
          label={label}
          type="search"
          handleChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </React.Fragment>
    )
  }
}


export default Autocomplete;
