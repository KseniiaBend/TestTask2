import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./styles.css";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
      publishDate: "",
      publishVersion: "",
      content: ""
    };
  }

  handleContentChange = ev => {
    this.setState({
      content: ev.target.getContent()
    });
  };

  handleAvailabilityChange = () => {
    this.setState({
      enabled: !this.state.enabled
    });
  };

  handleDateChange = ev => {
    this.setState({
      publishDate: ev.target.value
    });
  };

  handleVersionChange = ev => {
    this.setState({
      publishVersion: ev.target.value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();

    const result = {
      publishDate: this.state.publishDate,
      publishVersion: this.state.publishVersion,
      enabled: this.state.enabled,
      content: this.state.content
    };

    this.props.addLists(result);
  };

  render() {
    return (
      <div className="flex-container">
        <h1 className="heading">Создайте запись</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={6}>
              Дата публикации
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="date"
                name="publicationDate"
                onChange={this.handleDateChange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={6}>
              Версия приложения
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="text"
                name="appVersion"
                onChange={this.handleVersionChange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail" id="formGroupCol">
            <Form.Label id="editorLable">Описание изменений</Form.Label>
            <Editor
              onChange={this.handleContentChange}
              apiKey="gioq72lvjnjh3i5n80xg8scu7nsh4a2knf0bxm4qcr0cu1lt"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onChange={this.handleAvailabilityChange}
              checked={this.state.enabled}
              label="Опубликовать?"
            />
          </Form.Group>
          <Button className="btn" variant="primary" type="submit">
            Сохранить
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormComponent;
