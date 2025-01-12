import DiningTree from './DiningTree';
import Blue from '../shared/Blue';
import Goal from '../shared/Goal';
import Gold from '../shared/Gold';
import Tab from '../shared/Tab';
import '../../pages/Problem2.scss';

function DiningUnderstand(): JSX.Element {
  return (
    <div>
      This binary tree visualization aims to highlight how a binary tree is
      traversed in this phone call context. We assume a
      <b> post-order tree traversal</b>, such that the left subtree is traversed
      first, then the right subtree, and finally the root node of the subtree is
      traversed. Each person is denoted as a <b> Friend</b> object/node. Note
      that if someone calls someone else and no one picks up, that is
      represented as None, and the phone call thus takes 0 minutes.
      <br />
      <br />
      <Goal>Given information:</Goal>
      <br />
      <div className="goal-container" style={{ gap: '50px' }}>
        <div className="left-align">
          <Blue>class Friend</Blue>:
          <br />
          <Tab>
            <>
              <Blue>def </Blue>
              <span
                style={{
                  textDecoration: 'underline #736000',
                  whiteSpace: 'pre',
                }}
              >
                {'    '}
              </span>
              <Gold>init</Gold>
              <span
                style={{
                  textDecoration: 'underline #736000',
                  whiteSpace: 'pre',
                }}
              >
                {'    '}
              </span>
              (self, val, <br />
              left = <Blue>None</Blue>, right = <Blue>None</Blue>):
              <br />
              <Tab>
                <>
                  self.val = val
                  <br />
                  self.left = left
                  <br />
                  self.right = right
                </>
              </Tab>
            </>
          </Tab>
        </div>
        <table className="left-align">
          <thead>
            <tr>
              <td>Friend</td>
              <td>Length of a Call</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lea</td>
              <td>10 minutes</td>
            </tr>
            <tr>
              <td>May</td>
              <td>7 minutes</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>15 minutes</td>
            </tr>
            <tr>
              <td>Ryan</td>
              <td>5 minutes</td>
            </tr>
            <tr>
              <td>Sam</td>
              <td>12 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <Goal>
        Find the total call time for Lea. <br />
        <small style={{ fontWeight: '500' }}>
          (the total time it will take for Lea&apos;s calls and all subsequent
          calls to finish)
        </small>
      </Goal>
      <br />
      <DiningTree />
      <br />
    </div>
  );
}

export default DiningUnderstand;
