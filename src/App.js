import React from 'react';
import 'style/common.css';
const path = require('path');
import { connect } from 'react-redux';
import * as menuActions from 'modules/menu';
import { bindActionCreators } from 'redux';

class App extends React.Component {
    
  /** 화면 이동  */
  handleMoveTo = (e) => {
    const clickUrl =  e.currentTarget.getAttribute("data-url");
    this.props.MenuActions.setClickMenu(clickUrl);
    this.props.history.push(e.currentTarget.getAttribute("data-url"));
  }

  render(){
        const { handleMoveTo } = this;
        return (
          <div className="contents">
            <div className="swiper-container">
                <div className="main_title">행복성장캠퍼스는 취업 희망 청년에게<br/>우수한 교육훈련과 SK주식회사의 핵심 협력사 채용기회를 제공하여<br/>청년의 성장을 지원하는 프로그램입니다</div>
                <div className="sub_title"></div>
                <p className="bnt_area" >
                    <span className="main_btn" data-url="/intro/main" onClick={handleMoveTo}>행복성장캠퍼스 알아보기</span>
                </p>
                <div className="menu_area">
                    <div className="menu_box">
                        <ul>
                            <li className="gt-f-l manu_box_recruit" data-url="/recruit" onClick={handleMoveTo} style={{marginRight: '40px'}}>
                                <div className="menu_box_text" >
                                    <div className="menu_box_main_title">모집공고</div>
                                    <div className="menu_box_sub_title">꿈과 열정의 주인공<br />당신을 기다립니다</div>
                                </div>
                            </li> 
                            <li className="gt-f-l manu_box_company" data-url="/company" onClick={handleMoveTo} style={{marginRight: '40px'}}>
                                <div className="menu_box_text">
                                    <div className="menu_box_main_title">채용희망사 소개</div>
                                    <div className="menu_box_sub_title">당신의 가능성을<br />실현할 회사를 소개합니다</div>
                                </div>
                            </li> 
                            <li className="gt-f-l manu_box_qna" data-url="/faq" onClick={handleMoveTo}>
                                <div className="menu_box_text">
                                    <div className="menu_box_main_title">FAQ</div>
                                    <div className="menu_box_sub_title clear">채용관련 궁금한<br/>점을 확인해보세요</div>
                                </div>
                            </li>
                            <li className="clear"></li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default connect(
    (state) => ({
        clickedMenu: state.menu.get('clickedMenu'),
    }), (dispatch) => ({
        MenuActions : bindActionCreators(menuActions, dispatch)
    })
  )(App);
