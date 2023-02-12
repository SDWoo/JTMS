// 컴포넌트이지만 jsx로 안보여주고 별도 클래스로 보여줄거이기 떄문에 살짝 어려울 수 있다.
import ReactDOM from 'react-dom';
import ToastManager from './ToastManager';

class Toast {
  portal = null;

  constructor() {
    const portalId = 'toast-portal';
    const portalElement = document.getElementById(portalId);

    if (portalElement) {
      this.portal = portalElement;
      return;
    } else {
      this.portal = document.createElement('div');
      this.portal.id = portalId;
      document.body.appendChild(this.portal);
    }

    ReactDOM.render(
      <ToastManager
        bind={(createToast) => {
          this.createToast = createToast;
        }}
      />, //TODO: ToastManager넣기
      this.portal
    );
  }

  show(message, duration = 2000) {
    console.log('a');
    this.createToast(message, duration);
  }
}

export default new Toast();
