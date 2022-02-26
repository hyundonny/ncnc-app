describe('navigation', () => {
  it('should navigate from homepage to the faq page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#sidebar-button').click();
    cy.get('span').contains('고객 센터').click();
    cy.url().should('include', '/contacts');
    cy.get('h1').contains('상담 시간 안내');
    cy.get('h2')
      .contains('현금영수증(또는 세금계산서)을 발급 받고 싶어요!')
      .click();
    cy.contains(
      '니콘머니, 모바일 쿠폰은 현금성 유가증권에 해당되므로, 현금영수증이 별도로 발행되지 않습니다. 매장에서 구매하신 쿠폰으로 결제시 직원에게 요청하시면 발급이 가능합니다. 단, 일부 이벤트 쿠폰의 경우 현금 영수증 발행이 불가할 수 있으며 해당 사유로는 환불이 불가한 점 양해 부탁드립니다.',
    ).should('be.visible');
  });
});
