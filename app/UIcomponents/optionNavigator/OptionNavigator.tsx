import { StyleColors } from "globalStyles/colors";
import {
  OptionsContainer,
  Option,
  SelectedRing,
  ArrowContainer,
} from "./style";
import { Arrow } from "assets/Icons";

// Does not currently support keyboard navigation or pagination

export const OptionNavigator = ({
  numOptions,
  optionsWithColor,
  selectedOption,
  selectOption,
}: {
  numOptions?: number;
  selectedOption?: number;
  optionsWithColor?: StyleColors[];
  selectOption: (index: number) => void;
}) => {
  if (numOptions && optionsWithColor)
    throw new Error("Cannot have both numOptions and optionsWithColor");

  const length = numOptions || optionsWithColor?.length;
  if (!length)
    throw new Error("Must have either numOptions or optionsWithColor");

  if (selectedOption && length) {
    if (selectedOption < 0 || selectedOption > length - 1)
      throw new Error("Selected option is out of bounds");

    if (selectedOption > length)
      throw new Error("Selected option is out of bounds");
  }

  return (
    <OptionsContainer>
      {!!selectedOption && selectedOption > 0 && (
        <ArrowContainer
          onClick={() => selectOption(selectedOption - 1)}
          role="button"
          aria-label="Select Previous Option"
        >
          <Arrow />
        </ArrowContainer>
      )}
      {numOptions && (
        <Options
          options={numOptions}
          selectOption={selectOption}
          selectedOption={selectedOption}
        />
      )}
      {optionsWithColor && (
        <OptionsWithColor
          optionsWithColor={optionsWithColor}
          selectOption={selectOption}
          selectedOption={selectedOption}
        />
      )}
      {!!selectedOption && selectedOption < length - 1 && (
        <ArrowContainer
          onClick={() => selectOption(selectedOption + 1)}
          role="button"
          aria-label="Select Next Option"
        >
          <Arrow direction="right" />
        </ArrowContainer>
      )}
    </OptionsContainer>
  );
};

const OptionsWithColor = ({
  optionsWithColor,
  selectedOption,
  selectOption,
}: {
  optionsWithColor: StyleColors[];
  selectedOption?: number;
  selectOption: (index: number) => void;
}) => {
  return (
    <>
      {optionsWithColor.map((optionColor, index) => {
        if (selectedOption === index) {
          return (
            <SelectedOption
              key={index}
              color={optionColor}
              aria-label={`Selected Option ${index + 1}`}
            />
          );
        }
        return (
          <Option
            key={index}
            $color={optionColor}
            onClick={() => selectOption(index)}
            role="button"
            aria-label={`Select Option ${index + 1}`}
          />
        );
      })}
    </>
  );
};

const Options = ({
  options,
  selectedOption,
  selectOption,
}: {
  options: number;
  selectedOption?: number;
  selectOption: (index: number) => void;
}) => {
  return (
    <>
      {[...Array(options)].map((_, index) => {
        if (selectedOption === index) {
          return (
            <SelectedOption
              key={index}
              aria-label={`Selected Option ${index + 1}`}
            />
          );
        }
        return (
          <Option
            key={index}
            $color={StyleColors.lightGrey}
            onClick={() => selectOption(index)}
            role="button"
            aria-label={`Select Option ${index + 1}`}
          />
        );
      })}
    </>
  );
};

const SelectedOption = ({ color }: { color?: StyleColors }) => {
  return (
    <SelectedRing>
      <Option
        $color={color ?? StyleColors.lightGrey}
        role="button"
        aria-disabled
      />
    </SelectedRing>
  );
};
