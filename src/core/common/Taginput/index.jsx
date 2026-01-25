import React, { useState, useRef, useEffect } from 'react';
import { Input, Tag, theme } from 'antd';


const TagInput = ({ initialTags = [], onTagsChange }) => {
  const {  } = theme.useToken();
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState('');
  const [inputVisible, ] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
    onTagsChange?.(newTags); // Notify parent component about the change
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      const newTags = [...tags, inputValue];
      setTags(newTags);
      onTagsChange?.(newTags); // Notify parent component about the change
    }
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleInputConfirm();
    }
  };

  const renderTags = () =>
    tags.map((tag) => (
      <Tag key={tag} closable onClose={() => handleClose(tag)}>
        {tag}
      </Tag>
    ));

  return (
    <div className='custome-tag-input'>
      {renderTags()}
      <Input
        ref={inputRef}
        type="text"
        size="small"
        style={{ flex: 1, minWidth: 100, maxWidth: '300px' }}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleInputConfirm}
        placeholder="Add a tag"
        autoFocus={inputVisible}
      />
    </div>
  );
};

export default TagInput;
