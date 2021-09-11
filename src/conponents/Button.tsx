import React from "react";

const Button = () => {
  const restart = () => {};
  return (
    <>
      <div className="buttons">
        <button
          type="button"
          className="bg-command btn-lg col-3 rounded transparency-button font-light"
          onClick={restart}
        >
          AC
        </button>
        <button
          type="button"
          className="bg-command btn-lg col-3 rounded transparency-button font-light"
          onClick={restart}
        >
          +/-
        </button>
        <button
          type="button"
          className="bg-command btn-lg col-3 rounded transparency-button font-light"
          onClick={restart}
        >
          %
        </button>
        <button
          type="button"
          className="bg-operator btn-lg col-3 rounded font-light"
          onClick={restart}
        >
          ÷
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-3 rounded font-light"
        >
          7
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-3 rounded font-light"
        >
          8
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-3 rounded font-light"
        >
          9
        </button>
        <button
          type="button"
          className="bg-operator btn-lg col-3 rounded font-light"
          onClick={restart}
        >
          ×
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-3 rounded font-light"
        >
          4
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-3 rounded font-light"
        >
          5
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-3 rounded font-light"
        >
          6
        </button>
        <button
          type="button"
          className="bg-operator btn-lg col-3 rounded font-light"
          onClick={restart}
        >
          -
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-3 rounded font-light"
        >
          1
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-3 rounded font-light"
        >
          2
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-3 rounded font-light"
        >
          3
        </button>
        <button
          type="button"
          className="bg-operator btn-lg col-3 rounded font-light"
          onClick={restart}
        >
          +
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-6 rounded font-light"
        >
          0
        </button>
        <button
          type="button"
          className="bg-secondary btn-lg col-3 rounded font-light"
        >
          .
        </button>
        <button
          type="button"
          className="bg-operator btn-lg col-3 rounded font-light"
          onClick={restart}
        >
          =
        </button>
      </div>
    </>
  );
};

export { Button };
