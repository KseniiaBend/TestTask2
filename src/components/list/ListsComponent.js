import React from "react";
import Table from "react-bootstrap/Table";
import "./styles.css";

const ListsComponent = ({ lists }) => {
  return (
    <div className="listsTable">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Дата публикации</th>
            <th>Версия приложения</th>
            <th>Описание изменений</th>
          </tr>
        </thead>
        <tbody>
          {lists.map(list => (
            <tr key={list.publishVersion}>
              <td>{list.publishDate}</td>
              <td>{list.publishVersion}</td>
              <td dangerouslySetInnerHTML={{ __html: list.content }}></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

ListsComponent.defaultProps = {
  lists: []
};

export default ListsComponent;
